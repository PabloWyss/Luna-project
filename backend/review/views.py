from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import RestaurantReview
from .serializers import RestaurantReviewSerializer
from .permissions import IsOwnerOrReadOnly


class RestaurantReviewListView(generics.ListCreateAPIView):
    """
    API endpoint to list all reviews and create a new review.
    """
    queryset = RestaurantReview.objects.all()
    serializer_class = RestaurantReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(reviewed_by_user=self.request.user)


class RestaurantReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint to retrieve, update, or delete a specific review by ID.
    """
    queryset = RestaurantReview.objects.all()
    serializer_class = RestaurantReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class RestaurantReviewLikeView(APIView):
    """
    API endpoint to like/unlike a review by ID.
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        review = generics.get_object_or_404(RestaurantReview, pk=pk)
        user = request.user
        if user in review.likes_on_review.all():
            review.likes_on_review.remove(user)
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            review.likes_on_review.add(user)
            return Response(status=status.HTTP_201_CREATED)


from django.shortcuts import render

# Create your views here.
