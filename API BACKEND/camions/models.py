from django.db import models

# Create your models here.
class Camions(models.Model):
    # Oui, il est tout à fait possible de rendre le champ nom unique dans votre modèle Django.

# Pour ce faire, vous devez ajouter l'argument unique=True à la définition du champ CharField.

# 🔑 Rendre le Champ nom Unique

# Voici comment vous modifieriez votre modèle Camions pour garantir qu'aucun deux enregistrements de camion ne peuvent avoir le même nom :

    nom = models.CharField(max_length=100, unique=True) # <-- Ajout de unique=True
    description =models.TextField()
    prix = models.DecimalField(max_digits=10,decimal_places=2)
    image = models.ImageField(upload_to="static/image/produits")
    date_ajout = models.DateTimeField(auto_now_add=True)
    
    