# Prueba Fullstack - PruebaApi + Task CRUD App

Proyecto Fullstack para la gestión de tareas, compuesto por un **Backend en .NET Core 9** y un **Frontend en React**.

## 🌐 Descripción General

Este proyecto permite gestionar tareas de forma completa (CRUD) y se divide en dos partes principales:

1. **Backend (API)**: Maneja la lógica de negocio, persistencia de datos y exposición de endpoints REST.
2. **Frontend (React)**: Interfaz de usuario que consume los endpoints del backend y permite a los usuarios interactuar con las tareas.

El flujo general es:

* El usuario interactúa con la interfaz React.
* Las acciones (crear, actualizar, eliminar, obtener tareas) se envían a la API.
* La API realiza la operación sobre la base de datos SQL Server.
* La API devuelve los resultados al frontend para actualizar la UI.

## 🖥️ Backend - PruebaApi (API)

**Tecnologías:**

* .NET Core 9
* Entity Framework Core
* SQL Server

**Descripción:**

* Gestiona tareas (`Tarea`) y sus estados (`Estado`).
* Permite realizar operaciones CRUD a través de endpoints REST.
* Implementa soft-delete usando el campo `Eliminado`.
* Se conecta a una base de datos SQL Server llamada `TareasBD`.

**Endpoints principales:**

* `GET /api/Tareas` - Obtener todas las tareas
* `GET /api/Tareas/{id}` - Obtener tarea por ID
* `POST /api/Tareas` - Crear nueva tarea
* `PUT /api/Tareas/{id}` - Actualizar tarea existente
* `DELETE /api/Tareas/{id}` - Eliminar tarea

**Base de Datos:**

* Tablas: `Estado` y `Tarea`
* Estados predefinidos: Pendiente, En Progreso, Completada
* Soft delete en tareas usando el campo `Eliminado`

## 🎨 Frontend - Task CRUD App (React)

**Tecnologías:**

* React 18
* Tailwind CSS
* Lucide React
* JavaScript ES6+

**Descripción:**

* Interfaz moderna y responsiva para la gestión de tareas.
* Permite crear, leer, actualizar y eliminar tareas a través de modales y tablas.
* Valida formularios en tiempo real y muestra estados de carga y notificaciones.
* Consume los endpoints del backend en `http://localhost:5115`.

**Funcionalidades principales:**

* Visualizar todas las tareas en una tabla.
* Crear nuevas tareas con asignación y estado.
* Editar tareas existentes.
* Eliminar tareas (soft-delete).
* Actualizar la lista de tareas desde la UI.

## ⚙️ Flujo Fullstack

1. El usuario abre la aplicación React.
2. La UI realiza llamadas HTTP al backend (`PruebaApi`).
3. La API interactúa con la base de datos SQL Server.
4. Los datos se envían de vuelta al frontend y se muestran al usuario.

## 🔧 Instalación y Ejecución

### Backend

1. Configurar cadena de conexión en `appsettings.json`.
2. Ejecutar migraciones o crear la base de datos manualmente.
3. Iniciar la API con `dotnet run`.

### Frontend

1. Clonar o crear proyecto React.
2. Instalar dependencias (`npm install`).
3. Configurar Tailwind CSS.
4. Iniciar la aplicación con `npm start`.

> Ambos proyectos deben estar corriendo para que la aplicación funcione correctamente.

## 📝 Notas

* El backend maneja la lógica y persistencia.
* El frontend es solo la interfaz de usuario y consume los datos del backend.
* El proyecto sigue una arquitectura modular y buenas prácticas de desarrollo.

## 🤝 Contribución

* Fork, crear rama, commit, push y pull request.

## 📜 Licencia

* MIT License
