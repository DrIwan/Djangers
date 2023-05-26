from django.contrib.auth.models import User, Group
from tests.models import Test
from rest_framework import viewsets, permissions, authentication
from rest_framework.authentication import BasicAuthentication
from .serializers import UserSerializer, GroupSerializer, TestSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    Конечная точка API, которая позволяет пользователям просматривать или редактировать.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    Конечная точка API, которая позволяет просматривать или редактировать группы.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class TestViewSet(viewsets.ModelViewSet):
    """
    Конечная точка API, которая позволяет просматривать или редактировать тесты.
    """
    authentication_classes = [authentication.BasicAuthentication,]
    permission_classes = [permissions.IsAuthenticated,]
    queryset = Test.objects.all()
    serializer_class = TestSerializer
