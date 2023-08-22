from django.conf import settings
from django.db import models
class Location(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    latitude = models.CharField(max_length=255,)
    longitude = models.CharField(max_length=255,)

# Create your models here.
