from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ticket
from .serializers import TicketSerializer

# Create your views here.
class TicketListView(APIView):
    def get(self, request):
        tickets = Ticket.objects.filter(user=request.user)  # ログイン中のユーザーのチケットを取得
        serializer = TicketSerializer(tickets, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # ログイン中のユーザーを設定
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TicketUpdateView(APIView):
    def patch(self, request, pk):
        try:
            ticket = Ticket.objects.get(pk=pk, user=request.user)
        except Ticket.DoesNotExist:
            return Response({'error': 'Ticket not found'}, status=status.HTTP_404_NOT_FOUND)

        ticket.is_used = True  # 使用済みに更新
        ticket.save()
        serializer = TicketSerializer(ticket)
        return Response(serializer.data)
