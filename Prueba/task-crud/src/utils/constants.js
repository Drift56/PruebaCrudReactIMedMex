export const API_CONFIG = {
  BASE_URL: 'http://localhost:5115',
  ENDPOINTS: {
    TASKS: '/api/Tareas'
  },
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

// Task States
export const TASK_STATES = {
  PENDING: { id: 1, label: 'Nueva', color: 'bg-yellow-100 text-yellow-800' },
  IN_PROGRESS: { id: 2, label: 'En Progreso', color: 'bg-blue-100 text-blue-800' },
  COMPLETED: { id: 3, label: 'Completada', color: 'bg-green-100 text-green-800' }
};

// UI Constants
export const UI_MESSAGES = {
  LOADING: 'Cargando...',
  SAVING: 'Guardando...',
  DELETE_CONFIRM: '¿Estás seguro de que deseas eliminar esta tarea?',
  NO_TASKS: 'No hay tareas registradas',
  NO_TASKS_SUBTITLE: 'Comienza agregando una nueva tarea'
};

// Form Validation
export const VALIDATION_RULES = {
  TITLE_MIN_LENGTH: 3,
  TITLE_MAX_LENGTH: 100
};