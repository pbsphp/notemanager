from django.shortcuts import render
from django.http import JsonResponse

from .models import Note, NoteCategory


def index(request):
    return JsonResponse({
        "notes": list(Note.objects.values(
            "id",
            "title",
            "created_at",
            "category__id",
            "category__name",
            "is_favorite",
            "text"
        ))
    })


def categories(request):
    return JsonResponse({
        "categories": list(NoteCategory.objects.values(
            "id",
            "name"
        ))
    })


def create(request):
    pass


def update(request):
    pass
