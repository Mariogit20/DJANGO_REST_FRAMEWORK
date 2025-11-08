from django.contrib import admin
from .models import Contact
# Register your models here.

class DashContact(admin.ModelAdmin):
    list_display = ('nom','email','message')
    
admin.site.register(Contact,DashContact)
