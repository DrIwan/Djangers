# Djangers
Репозиторий для кейс-чемпионата «Разработка сервиса для тестирования знаний и навыков для сотрудников с компанией ООО «Флексайтс»


Ссылка на фигму:
https://www.figma.com/team_invite/redeem/RPdI9YEHOvw15GFbQvUvGl



Запускаете VSCode, устанавливаете:

Для GitHub:
GitHub Pull Requests and Issues https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
Git Graph https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph

Django https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django
Python https://marketplace.visualstudio.com/items?itemName=ms-python.python

Russian Language Pack for Visual Studio Code https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ru

Как вытянуть проект из репозитория:
Новое окно в VsCode,
Открываем систему управления версиями -> клонировать репозиторий, в строку вводим:
https://github.com/DrIwan/Djangers.git

Также надо будет установить python через консоль (лучше прям в VSCode) и для окружения:
https://django-debug-toolbar.readthedocs.io/en/latest/installation.html

Также для работы нужен будет Postgres SQL:
В нем создаем локальную базу, настрйки прописываем в settings.py (DATABASES)

Запуск приложения:
python manage.py runserver 