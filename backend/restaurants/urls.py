from django.urls import path
from .views import RestaurantListView

urlpatterns = [
    path('api/restaurants/', RestaurantListView.as_view(), name='restaurant-list'),
]
