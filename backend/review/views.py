from requests import Response
from rest_framework import generics, permissions

from restaurant.models import Restaurant
from .models import RestaurantReview
from .permissions import IsOwnerOrReadOnly
from .serializers import RestaurantReviewSerializer


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self):
        review_id = self.kwargs['review_id']
        return RestaurantReview.objects.get(pk=review_id)

    def put(self, request, *args, **kwargs):
        response = super().put(request, *args, **kwargs)
        return Response(response.data)

    def patch(self, request, *args, **kwargs):
        response = super().partial_update(request, *args, **kwargs)
        return Response(response.data)

    def delete(self, request, *args, **kwargs):
        response = super().delete(request, *args, **kwargs)
        return Response(response.data)


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
