from django.contrib.auth.models import User  # Importa el modelo de usuario de Django
from rest_framework import serializers  # Importa la clase base para crear serializadores
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Especifica el modelo a utilizar
        fields = ['email', 'password']  # Campos que se incluirán en el serializador

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError('El usuario ya existe con ese email.')
        return value  # Devuelve el valor si es válido

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['email'],  # Usa el email como nombre de usuario
            email=validated_data['email'],
            password=validated_data['password']  # Crea el usuario de forma segura
        )
        return user  # Devuelve el usuario creado


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
