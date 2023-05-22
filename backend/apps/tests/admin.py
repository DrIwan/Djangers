from django.contrib import admin
from .models import Test

@admin.register(Test) 
class Test_Admin(admin.ModelAdmin): # Отображение списка Тестов в админке
    list_display = ('id', 'Name', 'Sort', 'Description_before', 'Description_after', 'Comment', 'Write_time', 'Limit_time', 'Mix_Question')
    list_display_links = ('Name',)
    search_fields = ('id', 'Name', 'Sort', 'Description_before', 'Description_after', 'Comment', 'Write_time', 'Limit_time', 'Mix_Question')
    # inlines = [ SectionInline, ] # Отображение списка связанных с ним Разделов

