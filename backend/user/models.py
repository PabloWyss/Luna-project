from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f"users/{instance.id}/{filename}"


class User(AbstractUser):

    # Field used for authentication
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser (USERNAME_FIELD and passwords are always required)
    REQUIRED_FIELDS = ['username']

    # id
    # username
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=50, blank=True)
    description = models.CharField(max_length=50, blank=True)
    join_date = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(upload_to=user_directory_path, blank=True)
    # restaurants_love_by_user = models.ManyToManyField('self', symmetrical=False, related_name="loved_by_user")
    # reviewed_on = models.ForeignKey('self', related_name='reviewed_by_user', null=True, blank=True, on_delete=models.CASCADE)
    # commented_on = models.ForeignKey('self', related_name='commented_by', null=True, blank=True, on_delete=models.CASCADE)
    # liked_review = models.ManyToManyField('self', symmetrical=False, related_name="liked_by_user")

    def __str__(self):
        return self.username

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'


