from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model

UserModel = get_user_model()

# Usuario
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['id', 'username', 'email']

# Registro
class RegisterSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(write_only=True)

    class Meta:
        model = UserModel
        fields = ['username', 'email', 'password', 'confirmPassword']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirmPassword']:
            raise serializers.ValidationError({"password": "Las contraseñas no coinciden"})
        return data

    def create(self, validated_data):
        validated_data.pop('confirmPassword')  # Eliminamos confirmPassword antes de guardar
        user = UserModel.objects.create_user(
            username=validated_data['username'], 
            email=validated_data['email'], 
            password=validated_data['password']
        )
        return user

# Login
class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=False)
    email = serializers.EmailField(required=False)
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username and not email:
            raise serializers.ValidationError("Se requiere username o email")

        user = None
        if username:
            user = authenticate(username=username, password=password)
        elif email:
            try:
                user_obj = UserModel.objects.get(email=email)
                user = authenticate(username=user_obj.username, password=password)
            except UserModel.DoesNotExist:
                raise serializers.ValidationError("Usuario con este email no encontrado")

        if not user or not user.is_active:
            raise serializers.ValidationError("Credenciales incorrectas")

        return {"user": user}  # Retornamos el usuario como diccionario
