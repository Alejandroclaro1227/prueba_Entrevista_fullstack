PRUEBA TÉCNICA - FULLSTACK DEVELOPER
Descripción:
En esta prueba, desarrollarás una aplicación que permita a los usuarios gestionar su
perfil y sus publicaciones. El backend estará dividido en dos microservicios: uno para
gestionar los usuarios y otro para las publicaciones. El frontend, desarrollado con
ReactJS, se conectará con estos microservicios a través de APIs, y los microservicios
deberán estar contenedorizados con Docker.
Requerimientos:
1. Frontend (React):
○ Crea una interfaz que permita:
■ Registrar y autenticar usuarios.
■ Ver y editar el perfil del usuario autenticado.
■ Crear, listar, y eliminar publicaciones asociadas al usuario
autenticado.

○ La interfaz debe ser responsive y proporcionar una buena experiencia de
usuario.
○ Consume las APIs de los microservicios para realizar las operaciones
descritas.
2. Backend (Python):
○ Microservicio 1 (Usuarios):
■ Endpoint para registrar nuevos usuarios.
■ Endpoint para autenticar usuarios utilizando JWT.
■ Endpoint para actualizar los detalles del perfil de usuario (nombre,
email, etc.).
■ Implementa validaciones básicas como correo único y contraseñas
seguras.

○ Microservicio 2 (Publicaciones):
■ Endpoint para crear nuevas publicaciones (con título y contenido).
■ Endpoint para listar todas las publicaciones del usuario
autenticado.
■ Endpoint para eliminar una publicación específica.
■ Este microservicio solo debe permitir operaciones si el usuario está
autenticado.

○ Cada microservicio debe estar desplegado como un contenedor individual
utilizando Docker.
3. Intercomunicación:
○ Los microservicios de Usuarios y Publicaciones deben estar conectados.
Por ejemplo, el microservicio de Publicaciones debe validar las
credenciales del usuario consultando al microservicio de Usuarios.

4. Contenerización (Docker):
○ Crea un Dockerfile para cada microservicio.

○ Usa Docker Compose para levantar ambos microservicios y la base de
datos de tu elección.
○ Asegúrate de que los microservicios puedan comunicarse entre sí.
