from django.urls import path, include
from .import views 

app_name = 'tests'
urlpatterns = [
    path('', views.home, name='home'),
]