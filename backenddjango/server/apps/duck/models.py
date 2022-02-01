from django.db import models

# Create your models here.

class User(models.Model):
    phone = models.CharField(max_length=10, unique=True)

class Ducks(models.Model):
    number = models.IntegerField()
    user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    placering = models.IntegerField(null=True)

class Donations(models.Model):
    amount = models.IntegerField()
    user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return 'Duck nr. ' + self.amount

class Sponsors(models.Model):
    name = models.CharField(max_length=200)
    sponsored_amount = models.IntegerField()
    sponsored_goods = models.CharField(max_length=200)
    image = models.SlugField()

