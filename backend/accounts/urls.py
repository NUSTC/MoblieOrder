from django.urls import path
from .views import UserRegistrationView, LoginView, LogoutView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('api/register/', UserRegistrationView.as_view(), name='user-register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/token/', obtain_auth_token, name='api-token'),

]


