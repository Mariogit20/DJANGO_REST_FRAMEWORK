# # from django.shortcuts import render
# from rest_framework import viewsets
# from .models import Contact
# from .serializers import ContactSerializers
# # Create your views here.


# class ContactViewSet(viewsets.ModelViewSet):
#     queryset = Contact.objects.all()
#     serializer_class = ContactSerializers
    
    



from django.shortcuts import render

# Create your views here.
from .models import Contact
from .serializers import ContactSerializers

from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import send_mail

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
    
    def create(self, request, *args, **kwargs):                     # FONCTION    DANS UNE CLASS   ===========   METHODE
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():               # PRESENCE DE   CSRF_TOKEN   dans    FORMULAIRE DJANGO
            contact = serializer.save()
            
            #  Envoi d'email via MailDev                         # WINDOWS DOLAR   ou   WINDOWS ;
            subject =f"Nouveau message de {contact.nom}"    
            message = (
                f"Nom : {contact.nom}\n"
                f"Email : {contact.email}\n\n"
                f"Message :\n{contact.message}"
            )
            
            send_mail(
                subject,
                message,
                'no-reply@monapp.com',      # EMAIL PROFESSIONNEL
                ['admin@monapp.com'],  # destinataire (admin)
                fail_silently=False,   
            )
        
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
            