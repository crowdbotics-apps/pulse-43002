
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import NotificationSettingViewSet,NotificationSettingViewSet,NotificationSettingViewSet,NotificationSettingViewSet
router = DefaultRouter()
router.register('notificationsetting', NotificationSettingViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
