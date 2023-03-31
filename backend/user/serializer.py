from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password', 'is_staff', 'is_active', 'date_joined', 'is_superuser', 'user_permissions')


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password', 'is_staff', 'is_active', 'date_joined', 'is_superuser', 'user_permissions')


class UserSearchView(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        This view should return a user based on the query param in url
        """
        queryset = User.objects.all()
        username = self.request.query_params.get("search")
        if username is not None:
            queryset = User.objects.all().filter(user__username=username)
        return queryset
