from django.urls import path
from .views import MenuListView

urlpatterns = [
    path('api/menus/', MenuListView.as_view(), name='menu-list'),
]

from django.conf import settings
from django.conf.urls.static import static

# 現在の画像ディレクトリをDjangoで公開
if settings.DEBUG:
    urlpatterns += static('/menu_images/', document_root='menu_images')
