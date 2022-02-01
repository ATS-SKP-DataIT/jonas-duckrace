from django.shortcuts import render
from models import Ducks

# Create your views here.

def fillducks(request,amount=0):
    if request.method=='POST':
        for i in range(1, amount):
            duck = Ducks(number=i)
            duck.save()