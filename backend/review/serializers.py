from rest_framework import serializers

from comment.serializers import CommentSerializer
from .models import RestaurantReview


class RestaurantReviewSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = RestaurantReview
        fields = '__all__'
        read_only_fields = ('id', 'date_created', 'date_modified', 'reviewed_by_user', 'review_on_restaurant',
                            'comments')


class LikeReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = ('id', 'likes_on_review', 'liked_by_user',)

    def validate(self, attrs):
        user = self.context['request'].user
        if not user.is_authenticated:
            raise serializers.ValidationError("You must be logged in to like a review")
        return attrs


class UserCommentedReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = ('id', 'title', 'commented_by_user')