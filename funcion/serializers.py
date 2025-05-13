from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate



UserModel = get_user_model()


#aqui va el registro de usuario
class UserRegisterSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(write_only=True)

    class Meta:
        model = UserModel
        fields = ('email', 'username', 'password', 'confirmPassword')
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True},
        }

    def create(self, validated_data):
        email = validated_data.pop('email')
        username = validated_data.pop('username')
        password = validated_data.pop('password')
        confirmPassword = validated_data.pop('confirmPassword')

        if password != confirmPassword:
            raise serializers.ValidationError("Las contraseñas no coinciden.")

        user = UserModel.objects.create_user(
            email=email,
            username=username,
            password=password
        )
        return user


# Login de usuario (por email y password)
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            raise serializers.ValidationError('Se requiere email y contraseña.')
        
        


# Serializador de perfil de usuario
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'username')