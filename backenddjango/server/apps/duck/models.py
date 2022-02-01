from django.db import models

# Create your models here.

class User(models.Model):
    phone = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return 'User with phonenr. ' + self.phone

class Ducks(models.Model):
    number = models.IntegerField()
    user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    placering = models.IntegerField(null=True)

    def __str__(self):
        return 'Duck nr. ' + self.number

class Donations(models.Model):
    amount = models.IntegerField()
    user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return 'Donation from ' + self.user_id + ' - '+self.amount

class Sponsors(models.Model):
    name = models.CharField(max_length=200)
    sponsored_amount = models.IntegerField()
    sponsored_goods = models.CharField(max_length=200)
    image = models.SlugField()

    def __str__(self):
        if(self.amount >= 0):
            return self.name + ' sponsored: ' + self.goods
        else:
            return self.name + ' sponsored: ' + self.amount + ' DKK'

