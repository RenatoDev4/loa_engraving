from django.urls import path

from .views import merchantbot

urlpatterns = [
    path('', merchantbot),

]
