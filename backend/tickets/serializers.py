from rest_framework import serializers
from .models import Ticket

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id', 'user', 'menu', 'created_at', 'is_used']
        read_only_fields = ['created_at', 'is_used']  # 自動設定フィールドを読み取り専用に
