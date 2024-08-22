# recipe_backend/recipes/models.py

from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(max_length=200)
    steps = models.TextField()

    def __str__(self):
        return self.name
