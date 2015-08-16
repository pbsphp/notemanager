from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^profiles/', include('profiles.urls')),
    url(r'^notes/', include('notes.urls')),
    url(r'^$', 'home.views.index'),
)
