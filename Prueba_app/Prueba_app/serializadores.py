from rest_framework import serializers  # Importa la clase base para crear serializadores
from django.contrib.auth import get_user_model  # Importa la función para obtener el modelo de usuario
from rest_framework.validators import UniqueValidator  # Validador para asegurarse de que el valor sea único
from django.contrib.auth.password_validation import validate_password  # Validador de contraseñas de Django

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User  # Especifica el modelo a utilizar
        fields = ['username', 'email', 'password']  # Campos que se incluirán en el serializador

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user  # Devuelve el usuario creado

class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Especifica el modelo a utilizar
        fields = ['username', 'email']  # Campos que se incluirán en el serializador
