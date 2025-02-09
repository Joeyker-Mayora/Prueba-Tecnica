# Proyecto WebApp con Firebase y Google Sign-In

Este proyecto consiste en una **Prueba Tecnica** construida con **React** **Firebase** **Vite** como herramienta de desarrollo. La aplicación permite la autenticación de usuarios mediante **Google Sign-In** y ofrece funcionalidades como la visualización de posts, interacción con comentarios y filtrado de posts por tags. Los datos se almacenan de manera persistente en **Firebase**, utilizando su base de datos no relacional.

## Descripción

La aplicación permite a los usuarios realizar las siguientes acciones:

- **Iniciar sesión con Google**: Los usuarios pueden autenticarse a través de Google Sign-In. 
- **Ver posts**: Los posts se presentan con su título, imagen principal, tags, y el nombre del usuario que los publicó.
- **Ver comentarios**: Al hacer clic en un post, los usuarios pueden visualizar los comentarios asociados.
- **Filtrar por tags**: Los posts se pueden filtrar según los tags seleccionados.

## Tecnologías

- **React**: Biblioteca para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida y eficiente para React.
- **Firebase**: Plataforma para autenticación y almacenamiento de datos.
- **CSS**: Estilos personalizados para la interfaz de usuario.
- **Google Sign-In**: Autenticación mediante cuenta de Google.

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

- **Componentes**: Cada componente se encuentra en su propia carpeta (`Navbar`, `GoogleSignIn`, `PostList`, `PostItem`,`TagFilter`,`CommentModal`), con archivos `.jsx` para el código y `.css` para los estilos específicos de cada componente.
- **firebase.js**: Configuración de Firebase para la autenticación y la base de datos.
- **App.jsx**: Componente principal de la aplicación.
- **index.js**: Punto de entrada para la aplicación React.

## Instalación

Para instalar el proyecto localmente, sigue estos pasos:

# Clone this repository
$ git clone https://github.com/Joeyker-Mayora/Prueba-Tecnica.git Prueba-Tecnica

# Go into the repository
$ cd Prueba-Tecnica

# Install dependencies
$ npm install
