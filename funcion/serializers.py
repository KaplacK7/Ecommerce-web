from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

UserModel = get_user_model()


#aqui va el registro de usuario
class UserRegisterSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(write_only=True)  # Agregar campo confirmPassword

    class Meta:
        model = UserModel
        fields = ('email', 'username', 'password', 'confirmPassword')  # Incluir email y confirmPassword
        extra_kwargs = {'email': {'required': True}}
    def create(self, validated_data):
        email = validated_data.pop('email')  # Extraer email de los datos validados
        password = validated_data.pop('password')
        confirmPassword = validated_data.pop('confirmPassword')  # Eliminar confirmPassword antes de crear el usuario
        if password != confirmPassword:
            raise serializers.ValidationError("Passwords do not match")  # Validar que las contraseñas coincidan
        user = UserModel.objects.create_user(email=email, **validated_data, password=password)  # Pasar email y password a create_user
        return user


#aqui va para los usuarios ya creados
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            raise serializers.ValidationError('Both email and password are required')

        user = authenticate(email=email, password=password)

        if not user:
            raise serializers.ValidationError('Invalid credentials')

        return user


# serializar información de usuario, representado en objetos hacia la API
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'username')
