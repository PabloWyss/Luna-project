from rest_framework import serializers

from review.models import RestaurantReview
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Comment
        fields = '__all__'


class CreateCommentSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    review = serializers.PrimaryKeyRelatedField(queryset=RestaurantReview.objects.all())

    class Meta:
        model = Comment
        fields = ['text_content', 'user', 'review']


class DeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
