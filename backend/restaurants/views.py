from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Restaurant
from .serializers import RestaurantSerializer

# Create your views here.
class RestaurantListView(APIView):
    def get(self, request):
        restaurants = Restaurant.objects.all()  # 全レストラン取得
        serializer = RestaurantSerializer(restaurants, many=True)  # シリアライズ
        return Response(serializer.data)  # JSONレスポンス
