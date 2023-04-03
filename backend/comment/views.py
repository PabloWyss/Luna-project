from rest_framework import generics, permissions
from .models import Comment
from .serializers import CommentSerializer
from .permissions import IsOwnerOrAdminOrReadOnly


class CommentCreateAPIView(generics.CreateAPIView):
    """
    API endpoint to create a comment on a review.
    """
    serializer_class = CommentSerializer
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def perform_create(self, serializer):
        review_id = self.kwargs.get('review_id')
        serializer.save(user=self.request.user, comments_on_review=review_id)


class CommentListAPIView(generics.ListAPIView):
    """
    API endpoint to retrieve a list of all comments on a review.
    """
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Comment.objects.filter(comment_by_user=user_id)


class CommentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint to retrieve, update or delete a specific comment on a review.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdminOrReadOnly]
