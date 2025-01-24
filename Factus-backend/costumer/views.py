from django.shortcuts import render
from rest_framework import viewsets

from .serializer import CostumerSerializer
from .models import Costumer

# Create your views here.
class CostumerView(viewsets.ModelViewSet):
    serializer_class = CostumerSerializer
    queryset = Costumer.objects.all()
    