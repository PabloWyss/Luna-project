from rest_framework import generics

from restaurant.models import Restaurant
from restaurant.permissions import IsOnlyAuthenticatedUser
from restaurant.serializers import RestaurantSerializer


class RestaurantList(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    authentication_classes = [IsOnlyAuthenticatedUser]


class RestaurantCreate(generics.CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class RestaurantCategoryList(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Restaurant.objects.filter(category_id=category_id)


class RestaurantCategoryDetail(generics.RetrieveAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Restaurant.objects.filter(category_id=category_id)


class RestaurantListByUser(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Restaurant.objects.filter(user_id=user_id)


class RestaurantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
