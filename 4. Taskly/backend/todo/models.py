from django.db import models

# Create your models here.

class Task(models.Model):
    id = models.CharField(primary_key=True,max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField()

    def __str__(self):
        return self.title