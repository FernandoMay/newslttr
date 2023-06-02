# Proyecto de Newsletter

Este proyecto consiste en una aplicación de envío de boletines (newsletter) que consta de una aplicación frontend en React y una aplicación backend en Django. Ambas aplicaciones están empaquetadas en contenedores Docker y se despliegan en AWS.

## Estructura del proyecto

- El directorio `bakendo` contiene la aplicación backend en Django, junto con el archivo de configuración `Dockerfile` y el archivo `requirements.txt` con las dependencias del proyecto.
- El directorio `furonten` contiene la aplicación frontend en React, junto con el archivo de configuración `Dockerfile`, el archivo `.env` para variables de entorno y el archivo `package.json` con las dependencias del proyecto.
- El archivo `docker-compose.yml` se utiliza para orquestar los contenedores Docker de ambas aplicaciones y definir la configuración de la red y los volúmenes.

## Configuración

Antes de ejecutar el proyecto, asegúrate de tener instalado Docker en tu entorno de desarrollo. También necesitarás tener una cuenta de AWS con las credenciales adecuadas para desplegar los contenedores en la nube.

### Configuración de la aplicación backend

1. En el directorio `bakendo`, configura las variables de entorno necesarias en el archivo `.env`.
2. Actualiza la configuración del proyecto en `backend/config/settings.py` según tus preferencias y la configuración de AWS.

### Configuración de la aplicación frontend

1. En el directorio `furonten`, configura las variables de entorno necesarias en el archivo `.env`.

### Configuración de AWS

1. Asegúrate de tener configurado un clúster de contenedores en AWS (por ejemplo, utilizando Amazon ECS o Amazon EKS).
2. Actualiza el archivo `docker-compose.yml` con los valores correctos para la configuración de AWS (como el nombre del clúster, las credenciales de acceso, etc.).

## Ejecución del proyecto

Para ejecutar el proyecto, sigue los siguientes pasos:

1. Abre una terminal y navega al directorio raíz del proyecto.
2. Ejecuta el siguiente comando para iniciar los contenedores Docker:

### `docker-compose up -d`

Esto creará y ejecutará los contenedores para la aplicación frontend y la aplicación backend.

3. Accede a la aplicación frontend en tu navegador web ingresando la URL correspondiente.

4. ¡Listo! Ahora puedes utilizar la aplicación de envío de boletines.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu función o corrección de errores: `git checkout -b nombre-rama`.
3. Realiza tus modificaciones y guarda los cambios.
4. Haz un commit de tus cambios: `git commit -m "Descripción de los cambios"`.
5. Haz push a la rama: `git push origin nombre-rama`.
6. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
