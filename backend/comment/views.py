from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Comment
from .serializers import CommentSerializer
from .permissions import IsOwnerOrAdminOrReadOnly


class CommentCreateAPIView(generics.CreateAPIView):
    """
    API endpoint to create a comment on a review.
    """
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsOwnerOrAdminOrReadOnly]

    def perform_create(self, serializer):
        review_id = self.kwargs.get('review_id')
        serializer.save(user=self.request.user, review_id=review_id)


class CommentListAPIView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all comments on a review.
    """
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        review_id = self.kwargs.get('review_id')
        return Comment.objects.filter(review_id=review_id)


class CommentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint to retrieve, update or delete a specific comment on a review.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdminOrReadOnly]
