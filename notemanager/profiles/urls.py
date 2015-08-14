from django.conf.urls import patterns, include, url

from . import views

urlpatterns = [
    url(r'', include('django.contrib.auth.urls')),
    url(r'^$', views.index, name='index'),
]
