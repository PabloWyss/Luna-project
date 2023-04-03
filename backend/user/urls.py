from django.urls import path
from .views import MyProfileView, UserListView, UserSearchView, UserDetailView

urlpatterns = [
    path('me/', MyProfileView.as_view(), name='my-profile'),
    path('list/', UserListView.as_view(), name='user-list'),
    path('search/', UserSearchView.as_view(), name='user-search'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
]
