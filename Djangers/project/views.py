from django.shortcuts import render, redirect

def home(request):
    return redirect('tests:home')