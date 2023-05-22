from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


# Capital.objects.first().__dict__{
#     '_state': <django.db.models.base.ModelState object at 0x00000126F2DB0BB0>,
#     'id': 1,
#     'country': 'Norway',
#     'capital_city': 'Oslo',
#     'capital_population': 693500, 
#     'author_id': 1
# }