# Sistema de Gestión de Clientes (Fullstack - Angular + Express + Oracle)

## Objetivo

Aplicación web para gestionar clientes. Permite **crear**, **listar**, **editar**, y **eliminar** clientes.

- Frontend: Angular 17+ (Standalone) + Tailwind CSS
- Backend: Node.js + Express
- Base de datos: Oracle Database

---

## Backend - API REST con Node.js + Express


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


# EJERCICIOS PRÁCTICOS 1-5

## Ejercicio 1: Creación de Tablas y Relaciones
Objetivo: Evaluar la capacidad de diseñar una base de datos normalizada.
Tareas: Crea las siguientes tablas:
  - Clientes (id_cliente, nombre, email, telefono, fecha_registro)
  - Productos (id_producto, nombre, precio, stock)
  - Pedidos (id_pedido, id_cliente, fecha_pedido, total)
  - Detalle_Pedido (id_detalle, id_pedido, id_producto, cantidad, precio_unitario)
  - Define claves primarias y foráneas adecuadas.
  - Inserta al menos 5 registros en cada tabla.
### Creación de tablas:
<img width="818" height="872" alt="image" src="https://github.com/user-attachments/assets/3b0fa622-efc9-4daf-9c69-5adb3183b95c" />

### Insertar registros:
<img width="1890" height="990" alt="image" src="https://github.com/user-attachments/assets/28cbbaf0-7421-417c-96f0-34ca74703e50" />
<img width="1917" height="808" alt="image" src="https://github.com/user-attachments/assets/766c9048-af13-46ad-91dd-71c397fc76b3" />

## Ejercicio 2: Procedimiento Almacenado
Objetivo: Evaluar el manejo de PL/SQL y lógica de negocio.
Tareas: 
Crea un procedimiento almacenado SP_REALIZAR_PEDIDO que:
  - Reciba un id_cliente y una lista de productos con cantidades.
  - Inserte el pedido en la tabla Pedidos.
  - Inserte los detalles en Detalle_Pedido.
  - Actualice el stock en Productos.

<img width="1908" height="988" alt="image" src="https://github.com/user-attachments/assets/a84111fc-e6b7-4fb8-a2a1-b869972aaf0e" />
<img width="1918" height="561" alt="image" src="https://github.com/user-attachments/assets/eb9371cc-9e4b-489b-9dce-39c59447c35a" />

## Ejercicio 3: API REST CRUD
Objetivo: Evaluar conocimientos en Spring Boot, JPA y RESTful APIs.
Tareas: 
- Crear un servicio REST en Spring Boot con una entidad Cliente (id, nombre, email, telefono).
- Implementar un CRUD básico usando Spring Data JPA y un controlador REST.
- Exponer los siguientes endpoints:
  - GET /clientes → Listar todos los clientes
  - POST /clientes → Crear un cliente
  - PUT /clientes/{id} → Actualizar un cliente
  - DELETE /clientes/{id} → Eliminar un cliente

Link de video: https://youtu.be/xi9R_PGN7Gc

## Ejercicio 4: API REST con Express y Oracle
Objetivo: Evaluar conocimientos en Express.js, Oracle y CRUD.
Tareas:
  - Crear un API REST en Node.js con Express.js para gestionar productos.
  - Usar Hibernate para persistencia.
  Implementar los siguientes endpoints:
    - GET /productos → Listar todos los productos
    - POST /productos → Crear un producto
    - PUT /productos/:id → Actualizar un producto
    - DELETE /productos/:id → Eliminar un producto

Link del video: https://youtu.be/Mdg9Q9GX0qs

## Ejercicio 5: Consumir API REST y Mostrar Datos
Objetivo: Evaluar la capacidad de consumir APIs en Angular.
Tareas:
  - Crear un servicio en Angular que consuma GET /clientes desde un backend en Spring Boot o GET /productos desde Node.js.
  - Mostrar los clientes en una tabla.
  - Agregar un botón para eliminar clientes.

Link del video: https://youtu.be/JOru12cuOdU
