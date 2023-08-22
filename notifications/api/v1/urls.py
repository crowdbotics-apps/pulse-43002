
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import NotificationSettingsViewSet,NotificationSettingsViewSet,NotificationSettingsViewSet,NotificationSettingsViewSet
router = DefaultRouter()
router.register('notificationsettings', NotificationSettingsViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
