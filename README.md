<img width="1914" height="1030" alt="image" src="https://github.com/user-attachments/assets/750a92ec-7a90-474e-aab2-a73f02c3ba8c" /># Sistema de Gestión de Clientes (Fullstack - Angular + Express + Oracle)

## Objetivo

Aplicación web para gestionar clientes. Permite **crear**, **listar**, **editar**, y **eliminar** clientes.

- Frontend: Angular 17+ (Standalone) + Tailwind CSS
- Backend: Node.js + Express
- Base de datos: Oracle Database

---

## Backend - API REST con Node.js + Express

### Estructura

backend/
├── controllers/
│ └── clienteController.js
├── data/
│ └── clientes.json
├── routes/
│ └── clientes.js
├── uploads/
├── utils/
│ └── messages.js
├── server.js
└── package.json

### Instalación y ejecución

1. Asegúrate de tener Oracle corriendo (ejemplo: `XEPDB1`, puerto 1521).
2. Configura tus credenciales en `db.js`.
3. Ejecuta:


cd backend
npm install
node app.js

	Servidor disponible en http://localhost:3000

## Entidad Cliente
{
  "id": "number",
  "nombre": "string",
  "email": "string",
  "telefono": "string",
  "activo": "boolean"
}

## Endpoints
Método	Ruta			Acción
GET	/api/clientes		Listar todos los clientes
GET	/api/clientes/:id	Obtener cliente por ID
POST	/api/clientes		Crear nuevo cliente
PUT	/api/clientes/:id	Actualizar cliente existente
DELETE	/api/clientes/:id	Eliminación lógica (activo = 0)

## Frontend - Angular 17+ (Standalone + Tailwind)

### Estructura

src/
└── app/
├── components/
│ ├── cliente-form/
│ │ ├── cliente-form.ts
│ │ ├── cliente-form.html
│ │ ├── cliente-form.css
│ │ └── cliente-form.spec.ts
│ └── cliente-list/
│ ├── cliente-list.ts
│ ├── cliente-list.html
│ ├── cliente-list.css
│ └── cliente-list.spec.ts
├── models/
│ ├── cliente.model.ts
│ └── cliente.model.spec.ts
├── services/
│ ├── cliente.ts
│ └── cliente.spec.ts
├── app.config.ts
├── app.routes.ts
├── app.ts
├── app.html
├── app.css
└── app.spec.ts

### Instalación y ejecución

Asegurate de tener instalada la última versión de Npm y Angular

Ejecuta: 
cd frontend
npm install
npm run dev

	Servidor disponible en http://localhost:4200


## Stack usado

| Capa          | Tecnología                |
| ------------- | ------------------------- |
| Frontend      | Angular 17+, Tailwind CSS |
| Backend       | Node.js, Express.js       |
| Base de datos | Oracle 21c (XEPDB1)       |

# Capturas

## Listado de Clientes
<img width="1915" height="1030" alt="image" src="https://github.com/user-attachments/assets/3d62d8b3-67ea-48fe-baad-acfa3934f430" />

## Filtro por Estado
<img width="1917" height="1031" alt="image" src="https://github.com/user-attachments/assets/6171dd3c-37a2-4939-845e-524666b75dd2" />

## Filtro por correo o nombre
<img width="1914" height="1030" alt="image" src="https://github.com/user-attachments/assets/df7ce8c8-a2c4-4b42-908c-6bd0977f431c" />
<img width="1913" height="1033" alt="image" src="https://github.com/user-attachments/assets/948273c5-0d4d-4951-b39d-57145b96b39a" />

## Creación de Cliente
<img width="1917" height="1027" alt="image" src="https://github.com/user-attachments/assets/cf38198c-ea0a-4012-9c90-e089905de30f" />

## Edición de Cliente
<img width="1916" height="1031" alt="image" src="https://github.com/user-attachments/assets/6e23c6bf-39b3-484b-b3da-05e44bc043d0" />

## Exporte en Excel
<img width="2560" height="563" alt="image" src="https://github.com/user-attachments/assets/84a367db-5cb5-4cdf-838d-ffad1db56014" />

##Exporte en Pdf
<img width="1917" height="940" alt="image" src="https://github.com/user-attachments/assets/bb99c812-9f23-466b-b7f4-e3a11d162f93" />



