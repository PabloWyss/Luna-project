from django.db import models
from django.conf import settings
from restaurant.models import Restaurant
# from comment.models import Comment


class RestaurantReview(models.Model):
    REVIEW_CHOICES = (
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    )
    text_content = models.TextField()
    rating = models.IntegerField(choices=REVIEW_CHOICES)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    reviewed_by_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    review_on_restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='reviews')
    likes_on_review = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='reviewed_on', blank=True)
    # comments = models.ManyToManyField(to=Comment, related_name='review_comments', blank=True)
    liked_by_user = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='liked_review', blank=True)

    class Meta:
        ordering = ['-date_created']

    def __str__(self):
        return f"{self.reviewed_by_user.username} - {self.text_content} - {self.rating}"
