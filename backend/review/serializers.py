from rest_framework import serializers
from .models import RestaurantReview


class RestaurantReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = '__all__'
        read_only_fields = ('id', 'date_created', 'date_modified', 'reviewed_by_user', 'review_on_restaurant',)
