from django.db import models
# from django.contrib.auth.models import User, Group

# Модель абстрактных базовых свойств
class Abstract_Property(models.Model):
    Name = models.CharField('Название', max_length = 50)
    Sort = models.IntegerField('Сортировка', default = 0)
    # Status = models.(
    Description = models.TextField('Описание')

    class Meta:
        abstract=True


# Модель абстрактного теста
class Abstract_Test(Abstract_Property):
    Description = None
    Description_before = models.TextField('Описание - ДО прохождения')
    Description_after = models.TextField('Описание - ПОСЛЕ прохождения')
    Comment = models.TextField('Комментарий для преподавателя')
    Write_time = models.BooleanField('Записывать время прохождения?')
    Limit_time = models.IntegerField('Необходимое время на выполнение (минуты)')
    Mix_Question = models.BooleanField('Перемешивать вопросы?')

    class Meta:
        abstract=True


# Модель теста
class Test(Abstract_Test):

    def __str__(self):
        return self.Name

    class Meta:
        verbose_name = 'Тест'
        verbose_name_plural = 'Тесты'
