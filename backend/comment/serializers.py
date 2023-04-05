from rest_framework import serializers

from review.models import RestaurantReview
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Comment
        fields = '__all__'


class CreateCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['text_content']


class DeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
