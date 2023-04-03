from rest_framework import serializers

from restaurant.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'


class CreateRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['name', 'category', 'street', 'city', 'zip_code', 'website', 'phone', 'email', 'image']

    def create(self, validated_data):
        validated_data['created_by_user'] = self.context['request'].user
        restaurant = Restaurant.objects.create(**validated_data)

        return restaurant


class PatchRestaurantSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Restaurant
        fields = ['name', 'category', 'street', 'city', 'zip_code', 'website', 'phone', 'email', 'opening_hours',
                  'price_range', 'image']

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.category = validated_data.get('category', instance.category)
        instance.street = validated_data.get('street', instance.street)
        instance.city = validated_data.get('city', instance.city)
        instance.zip_code = validated_data.get('zip_code', instance.zip_code)
        instance.website = validated_data.get('website', instance.website)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.email = validated_data.get('email', instance.email)
        instance.opening_hours = validated_data.get('opening_hours', instance.opening_hours)
        instance.price_range = validated_data.get('price_range', instance.price_range)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance
