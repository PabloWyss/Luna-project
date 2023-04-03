from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Restaurant(models.Model):
    CATEGORY_CHOICES = (
        ('CH', 'Swiss'),
        ('US', 'American'),
        ('IT', 'Italian'),
        ('SP', 'Spanish'),
        ('KR', 'Korean'),
        ('TH', 'Thai'),
        ('SRB', 'Serbian'),
    )

    PRICE_RANGE_CHOICES = (
        ('$', 'Cheap'),
        ('$$', 'Medium'),
        ('$$$', 'Expensive'),
    )

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    opening_hours = models.CharField(max_length=100)
    price_range = models.CharField(max_length=100, choices=PRICE_RANGE_CHOICES)
    image = models.ImageField(upload_to='restaurants', blank=True)
    loved_by_users = models.ManyToManyField(to=User, related_name='loved_restaurants')
    # reviews = models.ManyToManyField('users.User', through='Review', related_name='reviews')

    def __str__(self):
        return self.name
