from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from funcion.serializers import UserRegisterSerializer, UserSerializer  # Ajuste en la importación
from funcion.models import Usuario

class UserRegisterAPIView(APIView):
    # Asegúrate de que esta vista no requiera protección CSRF
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request):
        # Utiliza el UserRegisterSerializer para procesar los datos del formulario
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            # Si los datos son válidos, guarda el usuario en la base de datos
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # Si hay errores de validación, devuelve los errores
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListaUsuariosAPIView(APIView):
    def get(self, request):
        # Obtén la lista de usuarios desde la base de datos
        users = Usuario.objects.all()

        # Serializa la lista de usuarios
        serializer = UserSerializer(users, many=True)

        # Devuelve la lista de usuarios serializada en la respuesta
        return Response(serializer.data, status=status.HTTP_200_OK)


class MyAPIView(APIView):
    # Asegúrate de que esta vista no requiera protección CSRF
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        # Implementa tu lógica para manejar una solicitud GET
        return Response({"message": "GET request processed"}, status=status.HTTP_200_OK)

    def post(self, request):
        # Utiliza el UserRegisterSerializer para procesar los datos del formulario
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            # Si los datos son válidos, guarda el usuario en la base de datos
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # Si hay errores de validación, devuelve los errores
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
