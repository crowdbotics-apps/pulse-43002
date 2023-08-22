from rest_framework import authentication
from notifications.models import NotificationSetting,NotificationSetting,NotificationSetting
from .serializers import NotificationSettingSerializer,NotificationSettingSerializer,NotificationSettingSerializer
from rest_framework import viewsets

class NotificationSettingViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSettingSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = NotificationSetting.objects.all()