from django.urls import path

from .views import get_abilities, result

urlpatterns = [
    path('generate/', result, name='result'),
    path('get_abilities/', get_abilities, name='get_abilities'),
]
