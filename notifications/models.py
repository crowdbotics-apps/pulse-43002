from django.conf import settings
from django.db import models
class NotificationSetting(models.Model):
    'Generated Model'
    user_id = models.OneToOneField("users.User",on_delete=models.CASCADE,related_name="notificationsetting_user_id",)
    type = models.CharField(max_length=255,)
    enabled = models.BooleanField()

# Create your models here.
