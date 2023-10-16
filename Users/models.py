from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None,**extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=255,null=True, blank=True)
    last_name = models.CharField(max_length=255,null=True, blank=True)
    email = models.EmailField(unique=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email' # this is identifed as the unique identifier for the user
    REQUIRED_FIELDS = [] # this is the required field for the user

    # display all the details of the user
    def __str__(self):
        return self.email
    

# class Student(models.Model):
#     user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
#     education = models.CharField(max_length=255, blank=True, null=True)
#     # age = models.PositiveIntegerField(null=True, blank=True)
#     ranking = models.IntegerField(null=True, blank=True)
    
#     def __str__(self):
#         return self.user.email
    
# class Instructor(models.Model):
#     user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
#     qualification = models.CharField(max_length=255, blank=True, null=True)
#     # age = models.PositiveIntegerField(null=True, blank=True)
#     def __str__(self):
#         return self.user.email