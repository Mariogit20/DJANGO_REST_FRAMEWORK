from rest_framework import serializers
from .models import Camions
# ito noho api ampifandraisana azy
class CamionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Camions
        fields = '__all__'



