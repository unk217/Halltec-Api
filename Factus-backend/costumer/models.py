from django.db import models

# Create your models here.

class Costumer(models.Model):
    
    DOCUMENT_TYPE_ID = [
        (1, 'Registro Civil'),
        (2, 'Tarjeta de Identidad'),
        (3, 'Cedula de Ciudadania'),
        (4, 'Tarjeta de Extranjería'),
        (5, 'Cedula de Extranjeria'),
        (6, 'NIT'),
        (7, 'Pasaporte'),
        (8, 'Documento de identificación extranjero'),
        (9, 'PEP'),
        (10, 'NIT otro país'),
        (11, 'NUIP*'),
    ]
    
    PERSON_TYPE = [
        (1, 'Persona Jurídica'),
        (2, 'Persona Natural'),
    ]
    
    TAX_TYPE = [
        (1, 'IVA'),
        (2, 'No aplica')
    ]
    
    document_type = models.IntegerField(choices=DOCUMENT_TYPE_ID, default =3)
    document_number = models.CharField(max_length=20)
    company = models.CharField(max_length=100, blank=True)
    names = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    p_type = models.IntegerField(choices=PERSON_TYPE, default =2)
    tribute = models.IntegerField(choices=TAX_TYPE, default =1)
    municipal = models.IntegerField()
    
    def __str__(self):
        return self.names
    
    
    
