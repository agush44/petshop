# **Petshop** 🐾  

## **Descripción**  
**Petshop** es una aplicación web para gestionar una tienda de mascotas, desarrollada con **React, Node.js, Express.js y MongoDB**.  

✔️ **Gestión de productos y servicios** desde un panel administrativo.  
✔️ **Registro y autenticación de usuarios** con JWT.  
✔️ **Integración con WhatsApp API** para confirmar pedidos.  
✔️ **Operaciones CRUD** para administrar datos.  
✔️ **Seguridad** con encriptación de contraseñas y protección de endpoints.  
✔️ **Documentación de API** con Swagger.  

---

## **🚀 Tecnologías utilizadas**  
### **Frontend:**  
- React + Styled Components 

### **Backend:**  
- Node.js + Express.js  
- MongoDB (base de datos no relacional)  
- JSON Web Tokens (JWT) para autenticación  
- API de WhatsApp para confirmación de pedidos  

---

## **📌 Requisitos previos**  
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:  
- **Node.js** (v16 o superior)  
- **MongoDB** (local o en la nube, ej. MongoDB Atlas)  
- **NPM** o **Yarn** como gestor de paquetes  

---

## **⚙️ Instalación y configuración**  

### 1️⃣ **Clonar el repositorio**  
```bash
git clone https://github.com/agush44/petshop.git
cd petshop
```

Tu estructura de carpetas debería verse así:  
```plaintext
petshop/
│── backend/
│── frontend/
│── README.md
```

---

## **📌 Configuración del Backend**  
### 2️⃣ **Instalar dependencias**  
```bash
cd backend
npm install
```

### 3️⃣ **Configurar variables de entorno en el Backend**  
Crea un archivo **.env** dentro de la carpeta **backend/** y agrega:  

```bash
# Configuración de la base de datos
MONGO_URI=your-mongodb-connection-string

# Clave secreta para autenticación con JWT
JWT_SECRET=your-secret-key

# Puerto del backend
PORT=5000

# URL del frontend para habilitar CORS
FRONTEND_URL=http://localhost:5173
```

### 4️⃣ **Ejecutar el Backend**  
```bash
npm run dev
```

---

## **📌 Configuración del Frontend**  
### 5️⃣ **Instalar dependencias**  
```bash
cd ../frontend
npm install
```

### 6️⃣ **Configurar variables de entorno en el Frontend**  
Crea un archivo **.env** dentro de la carpeta **frontend/** y agrega:  

```bash
# URL del backend
VITE_API_URL=http://localhost:5173
```

### 7️⃣ **Ejecutar el Frontend**  
```bash
npm run dev
```
🔹 El frontend correrá en **http://localhost:5173**  

---

## **📌 Uso**  
1️⃣ Regístrate o inicia sesión en la plataforma.  
2️⃣ Gestiona productos y servicios desde el panel administrativo.  
3️⃣ Realiza un pedido y recibe la confirmación mediante **WhatsApp**.  

---

## **📄 Licencia**  
Este proyecto está bajo la licencia **MIT**.  

🚀🐶🐱
