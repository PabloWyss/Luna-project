from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'groups')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    ordering = ('username',)
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info',
         {'fields': ('first_name', 'last_name', 'email', 'phone', 'location', 'description', 'profile_picture')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'join_date')}),
       # ('Related users', {'fields': ('restaurants_love', 'reviewed_by', 'commented_by', 'liked_reviews')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
            'username', 'email', 'first_name', 'last_name', 'password1', 'password2', 'is_staff', 'is_superuser',
            'is_active', 'phone', 'location', 'description', 'profile_picture', 'groups', 'user_permissions',
                #  'restaurants_love', 'reviewed_by', 'commented_by', 'liked_reviews'
            )}
         ),
    )


admin.site.register(User, CustomUserAdmin)
