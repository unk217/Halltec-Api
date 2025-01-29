from rest_framework import serializers
from .models import Costumer

class CostumerSerializer(serializers.ModelSerializer):
     tipo_documento_display = serializers.ReadOnlyField(source='DOCUMENT_TYPE_ID', read_only=True)
    
     class Meta:
        model = Costumer
        fields = ['id', 'document_type', 'document_number', 'company', 'names', 'address', 'email', 'phone', 'p_type', 'tribute', 'municipal', 'tipo_documento_display']