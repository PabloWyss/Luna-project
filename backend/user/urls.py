from django.urls import path
from .views import MyProfileView, UserListView, UserSearchView, UserDetailView

urlpatterns = [
    path('me/', MyProfileView.as_view(), name='my-profile'),
    path('users/list/', UserListView.as_view(), name='user-list'),
    path('users/', UserSearchView.as_view(), name='user-search'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
]

