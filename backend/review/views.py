from rest_framework.response import Response
from rest_framework import generics, permissions

from restaurant.models import Restaurant
from .models import RestaurantReview
from .permissions import IsOwnerOrReadOnly
from .serializers import RestaurantReviewSerializer, LikeReviewSerializer, UserCommentedReviewSerializer


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantReviewSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    lookup_field = 'id'

    def get_queryset(self):
        return RestaurantReview.objects.filter(pk=self.kwargs['id'])

    def perform_update(self, serializer):
        serializer.save(reviewed_by_user=self.request.user)

    def perform_destroy(self, instance):
        instance.delete()
        return Response(status=204)


class CreateRestaurantReviewView(generics.CreateAPIView):
    serializer_class = RestaurantReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        restaurant = Restaurant.objects.get(pk=self.kwargs['pk'])
        serializer.save(reviewed_by_user=self.request.user, review_on_restaurant=[restaurant])


class RestaurantReviewListView(generics.ListAPIView):
    serializer_class = RestaurantReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        restaurant = Restaurant.objects.get(pk=self.kwargs['restaurant_id'])
        return RestaurantReview.objects.filter(review_on_restaurant=restaurant)


class UserRestaurantReviewListView(generics.ListAPIView):
    serializer_class = RestaurantReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return RestaurantReview.objects.filter(reviewed_by_user=self.kwargs['user_id'])


class LikeReviewView(generics.CreateAPIView):
    serializer_class = LikeReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        review = RestaurantReview.objects.get(pk=self.kwargs['review_id'])
        if self.request.user in review.liked_by_user.all():
            review.likes_on_review -= 1
            review.liked_by_user.remove(self.request.user)
            review.save()
            return Response({'status': 'unliked'})
        else:
            review.likes_on_review += 1
            review.liked_by_user.add(self.request.user)
            review.save()
            return Response({'status': 'liked'})


class UserReviewLikesListView(generics.ListAPIView):
    serializer_class = RestaurantReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return RestaurantReview.objects.filter(liked_by_user=self.request.user)


class UserCommentedReviewListView(generics.ListAPIView):
    serializer_class = UserCommentedReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        # comment something
        return RestaurantReview.objects.filter(comments__comment_by_user=user).distinct()
