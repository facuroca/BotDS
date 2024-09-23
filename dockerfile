# Usa una imagen base de Node.js
FROM node:18-alpine

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que tu aplicación correrá (por ejemplo, 3000)
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "bot.js"]
