from django.urls import path
from . import views

urlpatterns = [
    path('registro/', views.UserRegisterAPIView.as_view(), name='user-register'),  # URL para el registro de usuario
    path('login/', views.UserLoginAPIView.as_view(), name='user-login'),  # URL para iniciar sesión
    path('logout/', views.UserLogoutAPIView.as_view(), name='user-logout'),  # URL para cerrar sesión
    path('usuario/', views.UserAPIView.as_view(), name='user-details'),  # URL para obtener detalles del usuario
    # Otras rutas de tu aplicación aquí...
]
