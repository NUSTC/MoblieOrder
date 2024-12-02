from django.urls import path
from .views import OrderHistoryView

urlpatterns = [
    path('api/orders/', OrderHistoryView.as_view(), name='order-history'),
]
