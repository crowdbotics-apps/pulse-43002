from rest_framework import serializers
from notifications.models import NotificationSetting,NotificationSetting

class NotificationSettingSerializer(serializers.ModelSerializer):

    class Meta:
        model = NotificationSetting
        fields = "__all__"