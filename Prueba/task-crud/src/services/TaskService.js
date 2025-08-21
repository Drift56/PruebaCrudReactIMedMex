import { API_CONFIG } from '../utils/constants';

class TaskService {
  static get baseURL() {
    return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TASKS}`;
  }

  static async getAllTasks() {
    try {
      const response = await fetch(this.baseURL, {
        method: 'GET',
        headers: API_CONFIG.HEADERS
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Error al obtener las tareas`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error in getAllTasks:', error);
      throw new Error('Error al obtener las tareas');
    }
  }

  static async getTaskById(id) {
    try {
      const response = await fetch(`${this.baseURL}/${id}`, {
        method: 'GET',
        headers: API_CONFIG.HEADERS
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Error al obtener la tarea`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error in getTaskById:', error);
      throw new Error('Error al obtener la tarea');
    }
  }

  static async createTask(task) {
    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify(task)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Error al crear la tarea`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error in createTask:', error);
      throw new Error('Error al crear la tarea');
    }
  }

  static async updateTask(task) {
    try {
      const response = await fetch(this.baseURL, {
        method: 'PUT',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify(task)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Error al actualizar la tarea`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error in updateTask:', error);
      throw new Error('Error al actualizar la tarea');
    }
  }

  static async deleteTask(id) {
    try {
      const response = await fetch(`${this.baseURL}/${id}`, {
        method: 'DELETE',
        headers: API_CONFIG.HEADERS
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Error al eliminar la tarea`);
      }
      
      // DELETE might not return content
      if (response.status !== 204) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error in deleteTask:', error);
      throw new Error('Error al eliminar la tarea');
    }
  }
}

export default TaskService;