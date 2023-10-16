from django.contrib import admin
from .models import UserPost, Saved, Shopping, MealPlanner
# Register your models here.

admin.site.register(UserPost)
admin.site.register(Saved)
admin.site.register(Shopping)
admin.site.register(MealPlanner)