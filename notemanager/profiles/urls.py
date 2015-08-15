from django.conf.urls import patterns, include, url
from django.conf import settings
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm


from . import views

urlpatterns = [
    url('^register/', CreateView.as_view(
        template_name='registration/register.html',
        form_class=UserCreationForm,
        success_url=settings.LOGIN_URL
    ), name='register'),
    url(r'', include('django.contrib.auth.urls')),

    url(r'^$', views.index, name='index'),
]
