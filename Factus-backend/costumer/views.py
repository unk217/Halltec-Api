from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .serializer import CostumerSerializer
from .models import Costumer

# Create your views here.
class CostumerView(viewsets.ModelViewSet):
    serializer_class = CostumerSerializer
    queryset = Costumer.objects.all()
    
    
    def list(self, request, *args, **kwargs):
        costumers = self.get_queryset()
        serializer = self.get_serializer(costumers, many=True)
        
        tipo_documento_choices = [
            {'value': value, 'label': label}
            for value, label in Costumer.DOCUMENT_TYPE_ID
        ]
        
        ptype_choices = [
            {'value': value, 'label': label}
            for value, label in Costumer.PERSON_TYPE
        ]
        
        taxtype_choices = [
            {'value': value, 'label': label}
            for value, label in Costumer.TAX_TYPE
        ]
        
        response_data = {
            'choices': {
                'document_type': tipo_documento_choices,
                'p_type': ptype_choices,
                'tax_type': taxtype_choices,
            },
            'costumers': serializer.data,
            
        }
        return Response(response_data)
    