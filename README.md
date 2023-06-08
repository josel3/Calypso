# Calypso
sitio web estatico para reproducir video basado en node.js y mustache, su principal atractivo es que funciona en smarts y 
androidbox viejas que ya no pueden actualizar sus navegadores y tienen problemas para instalar apps de este estilo.

hacerlo funcionar deberia ser tan simple como clonar el repositorio, crear carpetas con el nombre de la serie o pelicula
en la carpeta `library`, abrir una terminal en el directorio raiz y ejecutar
los siguientes comandos:
```
npm install

npm start
```
creara un servidor en el puerto 80 por lo que simplemente dirigirse a localhost da acceso al sitio, si se abre la ip de la pc
desde un navegador se abre la pagina con la seleccion de series y peliculas. lo ideal es asignarle una ip estatica al servidor
y levantar un servidor dns para poder asignar direcciones personalizadas.
