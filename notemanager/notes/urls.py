from django.conf.urls import patterns, include, url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^categories/$', views.categories, name='categories'),
    url(r'^create/$', views.create, name='create'),
    url(r'^update/$', views.update, name='update'),
    url(r'^destroy/$', views.destroy, name='destroy'),
    url(r'^share/$', views.share, name='share'),
    url(r'^unshare/$', views.unshare, name='unshare'),
    url(r'^favourite/$', views.favourite, name='favourite'),
    url(r'^unfavourite/$', views.unfavourite, name='unfavourite'),
    url(r'^(?P<uuid>\w+-\w+-\w+-\w+-\w+)$', views.raw_note, name='raw_note'),
]
