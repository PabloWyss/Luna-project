from django.urls import path
from .views import RestaurantReviewListView, RestaurantReviewDetailView, RestaurantReviewLikeView

urlpatterns = [
    path('', RestaurantReviewListView.as_view(), name='review-list'),
    path('<int:pk>/', RestaurantReviewDetailView.as_view(), name='review-detail'),
    path('<int:pk>/like/', RestaurantReviewLikeView.as_view(), name='review-like'),
]
