from django.db import models
from Users.models import CustomUser
# Create your models here.

class UserPost(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    recipe_name = models.CharField(max_length=100)
    recipe_image = models.ImageField(upload_to='recipes')
    recipe_time = models.CharField(max_length=100)
    description = models.TextField()
    ingredients = models.TextField()
    steps = models.TextField()
    recipe_type = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.recipe_name
    
class Saved(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    recipe = models.ForeignKey(UserPost, on_delete=models.CASCADE)

    # make user, recipe as primary key
    class Meta:
        unique_together = ['user', 'recipe']

class Shopping(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    recipe = models.ForeignKey(UserPost, on_delete=models.CASCADE)    

     # make user, recipe as primary key
    class Meta:
        unique_together = ['user', 'recipe']

    def __str__(self):
        return self.recipe.recipe_name

class MealPlanner(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    recipe = models.ForeignKey(UserPost, on_delete=models.CASCADE)
    day = models.CharField(max_length=100)
    time = models.CharField(max_length=100)

    # make user, recipe as primary key
    class Meta:
        unique_together = ['user', 'recipe', 'day', 'time']

    def __str__(self):
        return self.recipe.recipe_name