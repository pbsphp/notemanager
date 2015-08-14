from django.conf.urls import patterns, include, url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^categories/$', views.categories, name='categories'),
    url(r'^create/$', views.create, name='create'),
    url(r'^update/$', views.update, name='update'),
    url(r'^destroy/$', views.destroy, name='destroy'),
]
