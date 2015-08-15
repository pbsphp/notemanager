from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class NoteCategory(models.Model):
    name = models.CharField(unique=True, max_length=254)


class Note(models.Model):
    class Meta:
        ordering = ["-created_at"]

    title = models.CharField(max_length=254)
    created_at = models.DateTimeField(default=timezone.now)
    category = models.ForeignKey(NoteCategory)
    user = models.ForeignKey(User)
    is_favorite = models.BooleanField(default=False)
    text = models.TextField(blank=True)
    uuid = models.CharField(max_length=64, null=True, unique=True)
