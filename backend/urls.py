"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

######### aqui van las URLS para que tengan interaccion 
########   tanto en backend como en frontend
# urls.py/backend
from django.contrib import admin
from django.urls import path, include
from backend.api import UserRegisterAPIView, UserLoginAPIView  # Importa las vistas para el registro y login de usuarios
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # Ruta para el panel de administración de Django
    path('admin/', admin.site.urls),
    
    # Incluye las rutas de la app 'funcion' (asegúrate que esto exista en tu proyecto)
    path('funcion/', include('funcion.urls')),

    # Rutas para la API de inicio de sesión, registro y autenticación
    path('api/login/', UserLoginAPIView.as_view(), name='login'),
    path('api/registro/', UserRegisterAPIView.as_view(), name='registro'),
    
    # Rutas para el token JWT
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Obtención de token
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),  # Renovación del token
]
