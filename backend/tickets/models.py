from django.db import models
from django.contrib.auth.models import User
from menus.models import Menu

# Create your models here.
class Ticket(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tickets")  # ユーザー
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE, related_name="tickets")  # メニュー
    created_at = models.DateTimeField(auto_now_add=True)  # 発行日時
    is_used = models.BooleanField(default=False)  # 使用済みかどうか

    def __str__(self):
        return f"{self.user.username} - {self.menu.name} - {'Used' if self.is_used else 'Unused'}"

