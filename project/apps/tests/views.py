from django.shortcuts import render

# home
def home(request):
    test_data = {
    }
    return render(request, 'tests/home.html', test_data)