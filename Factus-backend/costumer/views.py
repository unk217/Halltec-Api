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
        
        response_data = {
            'choices': {
                'document_type': dict(Costumer.DOCUMENT_TYPE_ID),
                'p_type': dict(Costumer.PERSON_TYPE),
                'tax_type': dict(Costumer.TAX_TYPE),
            },
            'costumers': serializer.data,
            
        }
        return Response(response_data)
    