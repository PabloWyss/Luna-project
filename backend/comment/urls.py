from django.urls import path
from .views import CommentCreateAPIView, CommentListAPIView, CommentRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('reviews/<int:review_id>/comments/', CommentListAPIView.as_view(), name='comment-list'),
    path('reviews/<int:review_id>/comments/create/', CommentCreateAPIView.as_view(), name='comment-create'),
    path('reviews/comments/<int:pk>/', CommentRetrieveUpdateDestroyAPIView.as_view(), name='comment-detail'),
]
