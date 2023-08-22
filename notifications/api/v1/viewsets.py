from rest_framework import authentication
from notifications.models import NotificationSettings,NotificationSettings,NotificationSettings
from .serializers import NotificationSettingsSerializer,NotificationSettingsSerializer,NotificationSettingsSerializer
from rest_framework import viewsets

class NotificationSettingsViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSettingsSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = NotificationSettings.objects.all()