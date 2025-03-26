from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

UserModel = get_user_model()

def custom_validation(data):
    email = data.get('email', '').strip()
    username = data.get('username', '').strip()
    password = data.get('password', '').strip()

    # Validación del correo electrónico
    if not email:
        raise ValidationError('Se necesita un correo electrónico válido')
    if UserModel.objects.filter(email=email).exists():
        raise ValidationError('El correo electrónico ya está en uso. Elija otro.')

    # Validación de la contraseña
    if not password or len(password) < 8:
        raise ValidationError('La contraseña debe tener al menos 8 caracteres')

    # Validación del nombre de usuario
    if not username:
        raise ValidationError('Se necesita un nombre de usuario válido')

    return data

def validate_email(data):
    email = data['email'].strip()
    if not email:
        raise ValidationError('se necesita un email valido')
    return True

def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError('se necesita otro nombre de usuario')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('se necesita otra contraseña')
    return True
