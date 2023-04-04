from rest_framework.exceptions import PermissionDenied
from restaurant.models import Restaurant
from restaurant.permissions import IsOnlyAuthenticatedUser, IsOnlyChangeableByUser
from restaurant.serializers import RestaurantSerializer, CreateRestaurantSerializer, PatchRestaurantSerializer, \
    RestaurantCategorySerializer
from django.db.models import Q
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RestaurantSerializer
from user.serializer import UserSerializer
from review.serializers import RestaurantReviewSerializer
from review.models import RestaurantReview
from user.models import User


class RestaurantList(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class RestaurantCreate(generics.CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = CreateRestaurantSerializer
    permission_classes = [IsOnlyAuthenticatedUser]


class RestaurantCategoryList(generics.ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

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
    permission_classes = [IsOnlyChangeableByUser]

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


class SearchAPIView(APIView):
    def get(self, request):
        search_string = request.query_params.get('search_string')
        search_type = request.query_params.get('type')

        if search_type == 'restaurants':
            restaurants = Restaurant.objects.filter(
                Q(name__icontains=search_string) |
                Q(category__icontains=search_string) |
                Q(city__icontains=search_string)
            )
            serializer = RestaurantSerializer(restaurants, many=True)
            return Response(serializer.data)

        elif search_type == 'reviews':
            reviews = RestaurantReview.objects.filter(
                Q(text_content__icontains=search_string) |
                Q(reviewed_by_user__username__icontains=search_string)
            )
            serializer = RestaurantReviewSerializer(reviews, many=True)
            return Response(serializer.data)

        elif search_type == 'users':
            users = User.objects.filter(
                Q(username__icontains=search_string) |
                Q(email__icontains=search_string) |
                Q(first_name__icontains=search_string) |
                Q(last_name__icontains=search_string)
            )
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)

        else:
            return Response({'message': 'Invalid search type.'}, status=400)
