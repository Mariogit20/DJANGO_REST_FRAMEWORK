# from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CamionSerializers
from .models import Camions

# Create your views here.
class CamionViewSet(viewsets.ModelViewSet):
    queryset = Camions.objects.all()
    serializer_class = CamionSerializers
    
    
    
    