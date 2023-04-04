from rest_framework import generics
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import AllowAny

from restaurant.models import Restaurant
from restaurant.permissions import IsOnlyAuthenticatedUser, IsOnlyChangeableByUser
from restaurant.serializers import RestaurantSerializer, CreateRestaurantSerializer, PatchRestaurantSerializer, RestaurantCategorySerializer


class RestaurantList(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    authentication_classes = [AllowAny]


class RestaurantCreate(generics.CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = CreateRestaurantSerializer
    permission_classes = [IsOnlyAuthenticatedUser]


class RestaurantCategoryList(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    authentication_classes = [AllowAny]

    def get_queryset(self):
        category = self.kwargs['category']
        return Restaurant.objects.filter(category=category)


class RestaurantListByUser(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Restaurant.objects.filter(created_by_user_id=user_id)


class RestaurantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = PatchRestaurantSerializer
    permission_classes = [AllowAny, IsOnlyChangeableByUser]

    def perform_update(self, serializer):
        restaurant = self.get_object()
        if restaurant.created_by_user == self.request.user:
            serializer.save()
        else:
            raise PermissionDenied()

    def perform_destroy(self, instance):
        restaurant = self.get_object()
        if restaurant.created_by_user == self.request.user:
            instance.delete()
        else:
            raise PermissionDenied()


class CategoryListView(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantCategorySerializer
    authentication_classes = [AllowAny]
