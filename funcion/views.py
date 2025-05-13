from django.contrib.auth import get_user_model, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from django.core.exceptions import ValidationError
from rest_framework.authtoken.models import Token

UserModel = get_user_model()

def custom_validation(data):
    email = data.get('email', '').strip()
    username = data.get('username', '').strip()
    password = data.get('password', '').strip()
    confirmPassword = data.get('confirmPassword', '').strip()

    if not email:
        raise ValidationError('El email es obligatorio')
    if not username:
        raise ValidationError('El username es obligatorio')
    if not password:
        raise ValidationError('La contraseña es obligatoria')
    if password != confirmPassword:
        raise ValidationError('Las contraseñas no coinciden')
    
    return {
        'email': email,
        'username': username,
        'password': password,
        'confirmPassword': confirmPassword
    }

class UserRegisterAPIView(APIView):
    permission_classes = (permissions.AllowAny,)  # Permitir que cualquier usuario registre sin autenticación previa

    def post(self, request):
        try:
            clean_data = custom_validation(request.data)
        except ValidationError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid():
            user = serializer.save()  # Registrar usuario
            login(request, user)  # Iniciar sesión automáticamente
            return Response({'message': 'Registro y sesión iniciada con éxito'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            login(request, user)

            token, created = Token.objects.get_or_create(user=user)

            return Response({
                'message': 'Inicio de sesión exitoso',
                'token': token.key,
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                }
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLogoutAPIView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        logout(request)
        return Response({'message': 'Sesión cerrada correctamente'}, status=status.HTTP_200_OK)


class UserAPIView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)


class UserListAPIView(APIView):
    """Lista todos los usuarios registrados (Solo para administradores)"""
    permission_classes = (permissions.IsAdminUser,)

    def get(self, request):
        users = UserModel.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
