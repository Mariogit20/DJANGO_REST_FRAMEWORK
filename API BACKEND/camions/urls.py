from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import CamionViewSet
# r: m'eviter ilay antislas 
router = DefaultRouter()
router.register (r'camions',CamionViewSet) #mampiseho anleizy

urlpatterns = [
    path('',include(router.urls))
]

