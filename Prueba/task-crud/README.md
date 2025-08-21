# 📋 Task CRUD App

Sistema de gestión de tareas desarrollado en React con arquitectura modular.

## 🚀 Características

- ✅ **CRUD Completo**: Crear, leer, actualizar y eliminar tareas
- 🎨 **UI Moderna**: Interfaz limpia y responsiva con Tailwind CSS
- ⚡ **Estados de Carga**: Spinners y estados de carga para mejor UX
- 🔔 **Notificaciones**: Alertas de éxito y error
- 📱 **Responsivo**: Adaptable a diferentes tamaños de pantalla
- 🧪 **Validación**: Validación de formularios en tiempo real
- 🏗️ **Arquitectura Modular**: Código organizado y mantenible

## 🛠️ Tecnologías

- **React 18** - Framework principal
- **Tailwind CSS** - Estilos y diseño
- **Lucide React** - Iconos
- **JavaScript ES6+** - Programación moderna

## 📋 Prerequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- API Backend corriendo en `http://localhost:5115`

## 🚀 Instalación

1. **Clonar o crear el proyecto**
```bash
npx create-react-app task-crud
cd task-crud-app
```

2. **Instalar dependencias**
```bash
npm install lucide-react
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

3. **Configurar Tailwind CSS**
```bash
npx tailwindcss-cli@latest init
```

4. **Copiar todos los archivos** del código proporcionado en sus respectivas carpetas

5. **Iniciar la aplicación**
```bash
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de interfaz
│   ├── forms/          # Formularios
│   ├── tables/         # Tablas
│   ├── modals/         # Modales
│   └── layout/         # Layout y estructura
├── services/           # Servicios de API
├── hooks/              # Custom hooks
├── utils/              # Utilidades y helpers
├── App.jsx             # Componente principal
└── index.js           # Punto de entrada
```

## 🔌 API Endpoints

La aplicación se conecta a los siguientes endpoints:

- `GET /api/Tareas` - Obtener todas las tareas
- `GET /api/Tareas/{id}` - Obtener tarea por ID
- `POST /api/Tareas` - Crear nueva tarea
- `PUT /api/Tareas` - Actualizar tarea existente
- `DELETE /api/Tareas/{id}` - Eliminar tarea

## 📊 Estados de Tarea

- **Pendiente** (ID: 1) - Tarea nueva
- **En Progreso** (ID: 2) - Tarea en desarrollo
- **Completada** (ID: 3) - Tarea finalizada

## 🎯 Uso

1. **Ver Tareas**: La tabla muestra todas las tareas existentes
2. **Crear Tarea**: Click en "Nueva Tarea" para abrir el modal
3. **Editar Tarea**: Click en el ícono de edición en la tabla
4. **Eliminar Tarea**: Click en el ícono de papelera (con confirmación)
5. **Actualizar**: Click en "Actualizar" para recargar los datos

## 🧪 Características de Desarrollo

- **Componentes Reutilizables**: Arquitectura modular
- **Custom Hooks**: Lógica de negocio separada
- **Error Handling**: Manejo robusto de errores
- **Loading States**: Estados de carga en todas las operaciones
- **Form Validation**: Validación en tiempo real
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Cumple estándares de accesibilidad

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run build:prod` - Construye y sirve la aplicación

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🐛 Reportar Bugs

Si encuentras algún bug, por favor crea un issue con:
- Descripción del problema
- Pasos para reproducir
- Comportamiento esperado
- Screenshots si es necesario