from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    name = models.CharField(null=True,blank=True,max_length=255,)
    phone_number = models.CharField(max_length=255,null=True,blank=True,)
    avatar = models.ImageField(upload_to="user/avatar/images/",null=True,blank=True,)
    cover = models.ImageField(upload_to="user/cover/images/",null=True,blank=True,)
    bio = models.TextField(null=True,blank=True,)
    website = models.URLField(null=True,blank=True,)
    location_id = models.OneToOneField("locations.Location",on_delete=models.CASCADE,null=True,blank=True,related_name="user_location_id",)
    is_deactivated = models.BooleanField(null=True,blank=True,)
    deletion_date = models.TimeField(null=True,blank=True,)
    language_preference = models.CharField(max_length=255,null=True,blank=True,)
    display_mode = models.CharField(max_length=255,null=True,blank=True,)
    created_at = models.TimeField(auto_now=True,null=True,blank=True,)
    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
