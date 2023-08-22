from rest_framework import authentication
from locations.models import Location,Location,Location
from .serializers import LocationSerializer,LocationSerializer,LocationSerializer
from rest_framework import viewsets

class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Location.objects.all()