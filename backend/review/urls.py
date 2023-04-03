from django.urls import path

from review.views import CreateRestaurantReviewView, RestaurantReviewListView, UserRestaurantReviewListView, \
    ReviewDetailView

urlpatterns = [
    path("<int:review_id>/", ReviewDetailView.as_view(), name="review_list"),
    path('new/<int:pk>/', CreateRestaurantReviewView.as_view(), name='create_review'),
    path('restaurant/<int:restaurant_id>/', RestaurantReviewListView.as_view(), name='restaurant_review_list'),
    path('user/<int:user_id>/', UserRestaurantReviewListView.as_view(), name='user_review_list'),

]
