from rest_framework import serializers
from .models import Contact
# ito noho api ampifandraisana azy
class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'



