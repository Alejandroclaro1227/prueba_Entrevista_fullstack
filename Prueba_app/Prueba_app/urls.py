# Importaciones necesarias para la configuración de URLs
from django.urls import path  # Importa la función 'path' para definir rutas de URL
from django.views.generic import TemplateView  # Importa TemplateView para renderizar HTML
from .views import UserProfileView, RegisterView, LoginView, UpdateProfileView  # Importa las vistas personalizadas

# Importaciones de vistas para autenticación usando JWT
from rest_framework_simplejwt.views import (
    TokenObtainPairView,  # Vista para obtener un par de tokens (acceso y renovación)
    TokenRefreshView,  # Vista para refrescar el token de acceso
)

# Definición de las rutas URL
urlpatterns = [
    # Ruta base que renderiza el archivo 'index.html'
    path('', TemplateView.as_view(template_name='index.html')),
    
    # API para obtener el perfil del usuario
    path('api/user_profile/', UserProfileView.as_view(), name='user_profile'),
    
    # API para obtener el token de acceso
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # API para refrescar el token de acceso
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # API para registrar un nuevo usuario
    path('api/register/', RegisterView.as_view(), name='register'),
    
    # API para iniciar sesión
    path('api/login/', LoginView.as_view(), name='login'),
    
    # Ruta para el perfil de usuario en vista no API
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    
    # Ruta para registrar un nuevo usuario (no API)
    path('register/', RegisterView.as_view(), name='register'),
    
    # Ruta para iniciar sesión (no API)
    path('login/', LoginView.as_view(), name='login'),
    
    # Ruta para actualizar el perfil del usuario
    path('update-profile/', UpdateProfileView.as_view(), name='update-profile'),
]
