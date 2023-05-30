from django.db import models

class Newsletter(models.Model):
    file = models.FileField(upload_to='newsletters/')
    class Meta:
        app_label = 'newslttr'

class Recipient(models.Model):
    email = models.EmailField(unique=True)
    newsletters = models.ManyToManyField(Newsletter, related_name='recipients')
    is_subscribed = models.BooleanField(default=True)
