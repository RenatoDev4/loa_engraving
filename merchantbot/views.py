from django.shortcuts import render


def merchantbot(request):
    return render(request, 'merchantbot/pages/index.html')
