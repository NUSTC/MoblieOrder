from django.urls import path
from .views import TicketListView, TicketUpdateView

urlpatterns = [
    path('api/tickets/', TicketListView.as_view(), name='ticket-list'),
    path('api/tickets/<int:pk>/', TicketUpdateView.as_view(), name='ticket-update'),
]
