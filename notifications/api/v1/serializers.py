from rest_framework import serializers
from notifications.models import NotificationSettings,NotificationSettings

class NotificationSettingsSerializer(serializers.ModelSerializer):

    class Meta:
        model = NotificationSettings
        fields = "__all__"