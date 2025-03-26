from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Group, Permission
from django.contrib.auth.base_user import BaseUserManager



class UsuarioManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('El email es obligatorio')
        if not username:
            raise ValueError('El nombre de usuario es obligatorio')
        if not password:
            raise ValueError('La contraseña es obligatoria')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, username, password=None):
        user = self.create_user(email, username, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class Usuario(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=100, unique=True)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=128)  # Ajustar la longitud según sea necesario

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UsuarioManager()

    groups = models.ManyToManyField(Group, verbose_name='grupos', blank=True, related_name='usuarios')
    user_permissions = models.ManyToManyField(Permission, verbose_name='permisos de usuario', blank=True, related_name='usuarios')

    def __str__(self):
        return self.username
