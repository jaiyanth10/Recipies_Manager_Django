# recipe_backend/recipes/urls.py

from django.urls import path
from .views import submit_recipie, fetch_recipie

urlpatterns = [
    path('submitRecipie/', submit_recipie, name='submit_recipie'),
    path('fetchRecipie/', fetch_recipie, name='fetch_recipie'),
]
