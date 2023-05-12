from django.contrib import admin
from django.urls import path, include
from .import views 

urlpatterns = [
    path('__debug__/', include('debug_toolbar.urls')), #Мод для дебага
    path('admin/', admin.site.urls),
	path('tests/', include('tests.urls')),
    path('', views.home, name='home'),
]

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]