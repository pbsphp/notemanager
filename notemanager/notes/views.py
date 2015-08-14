from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User

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
    data = request.POST
    n = Note()
    n.title = data.get("title", None)
    n.is_favorite = data.get("is_favorite", False)
    n.text = data.get("text", None)

    category_id = data.get("category__id", None)
    n.category = NoteCategory.objects.get(id=category_id)
    n.user = User.objects.get(id=1)
    n.save()
    return HttpResponse("")


def update(request):
    data = request.POST
    id_ = data["id"]
    n = Note.objects.get(id=id_)
    n.title = data.get("title", n.title)
    n.is_favorite = data.get("is_favorite", n.is_favorite)
    n.text = data.get("text", n.text)

    category_id = data.get("category__id", n.category_id)
    n.category = NoteCategory.objects.get(id=category_id)
    n.save()
    return HttpResponse("")
