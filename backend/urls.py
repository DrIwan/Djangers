from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'tests', views.TestViewSet)


# Подключите наш API, используя автоматическую маршрутизацию URL.
# Кроме того, мы включаем URL-адреса для входа в доступный для просмотра API.
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
	path('tests/', include('tests.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('accounts/', include('django.contrib.auth.urls')),
]