# Djangers
Репозиторий для кейс-чемпионата «Разработка сервиса для тестирования знаний и навыков для сотрудников с компанией ООО «Флексайтс»

ПО:
* Python 3.10+
* PostgreSQL

Ссылка на макет:
https://www.figma.com/team_invite/redeem/RPdI9YEHOvw15GFbQvUvGl

Как вытянуть проект из репозитория:
Новое окно в VsCode,
Открываем систему управления версиями -> клонировать репозиторий, в строку вводим:
https://github.com/DrIwan/Djangers.git

Или клонировать командой:

    git clone https://github.com/DrIwan/Djangers.git


## Backend

Рекомендуется создать виртуальное окружение и работать через него:

    python -m venv venv

Активировать окружение на Windows:

    venv\Scripts\Activate.ps1

Установить необходимые пакеты:
    pip install -r requirements.txt

Для удобной отладки приложения установить:

    pip install django-debug-toolbar

Создаем файл настроек на основе шаблона:

    cp backend/settings.py.example backend/settings.py

В settings.py заполнить SECRET_KEY и указать данные для подключения базы данных

Применить миграции базы данных:

    python manage.py migrate

Запуск приложения:

    python manage.py runserver


## Frontend

    cd frontend
    npm install

Запуск

    npm run serve
