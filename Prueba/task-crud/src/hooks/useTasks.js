import { useState, useEffect } from 'react';
import { TaskService } from '../services';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await TaskService.getAllTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error loading tasks:', err);
      setError(err.message || 'Error al cargar las tareas');
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  };

  const createTask = async (taskData) => {
    try {
      setIsLoading(true);
      setError(null);
      const { TareaId, ...createData } = taskData;
      await TaskService.createTask(createData);
      await loadTasks(); // Reload tasks after creation
      return { success: true, message: 'Tarea creada exitosamente' };
    } catch (err) {
      console.error('Error creating task:', err);
      const message = err.message || 'Error al crear la tarea';
      setError(message);
      return { success: false, message };
    } finally {
      setIsLoading(false);
    }
  };

  const updateTask = async (taskData) => {
    try {
      setIsLoading(true);
      setError(null);
      await TaskService.updateTask(taskData);
      await loadTasks(); // Reload tasks after update
      return { success: true, message: 'Tarea actualizada exitosamente' };
    } catch (err) {
      console.error('Error updating task:', err);
      const message = err.message || 'Error al actualizar la tarea';
      setError(message);
      return { success: false, message };
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setIsLoading(true);
      setError(null);
      await TaskService.deleteTask(taskId);
      await loadTasks(); // Reload tasks after deletion
      return { success: true, message: 'Tarea eliminada exitosamente' };
    } catch (err) {
      console.error('Error deleting task:', err);
      const message = err.message || 'Error al eliminar la tarea';
      setError(message);
      return { success: false, message };
    } finally {
      setIsLoading(false);
    }
  };

  // Load tasks on mount
  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tasks,
    isLoading,
    error,
    loadTasks,
    createTask,
    updateTask,
    deleteTask
  };
};

export default useTasks;