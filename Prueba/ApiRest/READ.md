# PruebaApi

API en **.NET Core 9** para la gestión de tareas, utilizando **Entity Framework** y **SQL Server**. Permite realizar operaciones CRUD sobre tareas y gestionar su estado.

## 📦 Estructura de Modelos

### Modelo `Estado`

```csharp
public partial class Estado
{
    public int EstadoId { get; set; }
    public string Nombre { get; set; } = null!;
}
```

### Modelo `Tarea`

```csharp
public partial class Tarea
{
    public int TareaId { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public int EstadoId { get; set; }
    public bool Eliminado { get; set; }
    public string Asignado { get; set; } = string.Empty;
}
```

## 📚 Base de Datos

Nombre: **TareasBD**
Motor: **SQL Server**

### Creación de Base de Datos y Tablas

```sql
CREATE DATABASE TareasBD;
USE TareasBD;

CREATE TABLE Estado(
    EstadoId int PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
);

CREATE TABLE Tarea(
    TareaID int PRIMARY KEY IDENTITY(1,1),
    Titulo VARCHAR(200) NOT NULL,
    EstadoId int NOT NULL,
    Eliminado bit NOT NULL,
    Asignado VARCHAR(100) NOT NULL,
    CONSTRAINT FK_EstadoId FOREIGN KEY(EstadoId) REFERENCES Estado(EstadoId)
);

INSERT INTO Estado VALUES (1, 'Nueva');
INSERT INTO Estado VALUES (2, 'En Proceso');
INSERT INTO Estado VALUES (3, 'Completada');
```

### Cadena de Conexión Genérica

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=TU_SERVIDOR;Database=TareasBD;Trusted_Connection=True;"
}
```

> Sustituye `TU_SERVIDOR` por el nombre de tu servidor SQL Server.

## 🔄 Endpoints

La API sigue el patrón REST para el CRUD de tareas.

### 1. Obtener todas las tareas

**GET** `/api/tareas`

**Response:**

```json
[
  {
    "tareaId": 1,
    "titulo": "Comprar material",
    "estadoId": 1,
    "eliminado": false,
    "asignado": "Juan"
  }
]
```

### 2. Obtener tarea por ID

**GET** `/api/tareas/{id}`

**Response:**

```json
{
  "tareaId": 1,
  "titulo": "Comprar material",
  "estadoId": 1,
  "eliminado": false,
  "asignado": "Juan"
}
```

### 3. Crear nueva tarea

**POST** `/api/tareas`

**Request:**

```json
{
  "titulo": "Revisar proyecto",
  "estadoId": 1,
  "eliminado": false,
  "asignado": "Ana"
}
```

**Response:**

```json
{
  "tareaId": 2,
  "titulo": "Revisar proyecto",
  "estadoId": 1,
  "eliminado": false,
  "asignado": "Ana"
}
```

### 4. Actualizar tarea

**PUT** `/api/tareas/{id}`

**Request:**

```json
{
  "titulo": "Revisar proyecto actualizado",
  "estadoId": 2,
  "eliminado": false,
  "asignado": "Ana"
}
```

**Response:**

```json
{
  "tareaId": 2,
  "titulo": "Revisar proyecto actualizado",
  "estadoId": 2,
  "eliminado": false,
  "asignado": "Ana"
}
```

### 5. Eliminar tarea

**DELETE** `/api/tareas/{id}`

**Response:**

```json
{
  "message": "Tarea eliminada correctamente"
}
```

## ⚙️ Configuración y ejecución

1. Clonar el repositorio

```bash
git clone <url-del-repo>
```

2. Restaurar dependencias

```bash
dotnet restore
```

3. Ejecutar migraciones y crear base de datos (opcional si ya creaste la BD manualmente)

```bash
dotnet ef database update
```

4. Ejecutar la API

```bash
dotnet run
```

La API quedará disponible por defecto en `https://localhost:5115`.

## 💡 Notas

* El campo `Eliminado` en `Tarea` permite soft-delete.
* Se recomienda utilizar **Postman** o **Swagger** para probar los endpoints.
