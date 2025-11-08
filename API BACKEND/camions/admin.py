from django.contrib import admin
from .models import Camions
# Register your models here.
class DashCamion(admin.ModelAdmin):
    list_display = ('nom','description','prix','image')

admin.site.register(Camions,DashCamion)