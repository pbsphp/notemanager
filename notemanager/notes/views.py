import uuid

from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404

from .models import Note, NoteCategory


@login_required
def index(request):
    return JsonResponse({
        "notes": list(Note.objects.filter(user=request.user)
        .values(
            "id",
            "title",
            "created_at",
            "category__id",
            "category__name",
            "is_favorite",
            "text",
            "uuid"
        ))
    })


@login_required
def categories(request):
    return JsonResponse({
        "categories": list(NoteCategory.objects.values(
            "id",
            "name"
        ))
    })


@login_required
def create(request):
    data = request.POST
    n = Note()
    n.title = data.get("title", None)
    n.is_favorite = data.get("is_favorite", False)
    n.text = data.get("text", None)

    category_id = data.get("category__id", None)
    n.category = get_object_or_404(NoteCategory, id=category_id)
    n.user = request.user
    n.save()
    return HttpResponse("")


@login_required
def update(request):
    data = request.POST
    id_ = data["id"]
    n = get_object_or_404(Note, user=request.user, id=id_)
    n.title = data.get("title", n.title)
    n.is_favorite = data.get("is_favorite", False)
    n.text = data.get("text", n.text)

    category_id = data.get("category__id", n.category_id)
    n.category = get_object_or_404(NoteCategory, id=category_id)
    n.save()
    return HttpResponse("")


@login_required
def destroy(request):
    id_ = request.POST["id"]
    get_object_or_404(Note, user=request.user, id=id_).delete()
    return HttpResponse("")


@login_required
def share(request):
    id_ = request.POST["id"]
    n = get_object_or_404(Note, user=request.user, id=id_)
    n.uuid = uuid.uuid4()
    n.save()
    return HttpResponse("")


@login_required
def unshare(request):
    id_ = request.POST["id"]
    n = get_object_or_404(Note, user=request.user, id=id_)
    n.uuid = None
    n.save()
    return HttpResponse("")


@login_required
def favourite(request):
    id_ = request.POST["id"]
    n = get_object_or_404(Note, user=request.user, id=id_)
    n.is_favorite = True
    n.save()
    return HttpResponse("")


@login_required
def unfavourite(request):
    id_ = request.POST["id"]
    n = get_object_or_404(Note, user=request.user, id=id_)
    n.is_favorite = False
    n.save()
    return HttpResponse("")


def raw_note(request, uuid):
    note = get_object_or_404(Note, uuid=uuid)
    return HttpResponse(note.text)
