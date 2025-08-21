import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { validateTaskForm, createEmptyTask, TASK_STATES, UI_MESSAGES } from '../../utils';

const TaskForm = ({ task, onSubmit, onCancel, isLoading }) => {
  const [formData, setFormData] = useState(createEmptyTask());
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setFormData(task);
    } else {
      setFormData(createEmptyTask());
    }
    setErrors({});
  }, [task]);

  const handleSubmit = () => {
    const validation = validateTaskForm(formData);
    
    if (validation.isValid) {
      onSubmit(formData);
    } else {
      setErrors(validation.errors);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
          Título de la Tarea *
        </label>
        <input
          id="titulo"
          type="text"
          value={formData.titulo}
          onChange={(e) => handleChange('Titulo', e.target.value)}
          onKeyPress={handleKeyPress}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            errors.titulo ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
          placeholder="Ingresa el título de la tarea"
          disabled={isLoading}
          maxLength={100}
        />
        {errors.titulo && (
          <p className="mt-1 text-sm text-red-600" role="alert">{errors.titulo}</p>
        )}
      </div>

      <div>
        <label htmlFor="asignado" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre de la persona Asignada *
        </label>
        <input
          id="asignado"
          type="text"
          value={formData.asignado}
          onChange={(e) => handleChange('Asignado', e.target.value)}
          onKeyPress={handleKeyPress}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            errors.Titulo ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
          placeholder="Ingresa persona asignada"
          disabled={isLoading}
          maxLength={100}
        />
        {errors.asignado && (
          <p className="mt-1 text-sm text-red-600" role="alert">{errors.asignado}</p>
        )}
      </div>

      <div>
        <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-1">
          Estado *
        </label>
        <select
          id="estado"
          value={formData.estadoId}
          onChange={(e) => handleChange('EstadoId', parseInt(e.target.value))}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            errors.EstadoId ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
          disabled={isLoading}
        >
          <option value={TASK_STATES.PENDING.id}>{TASK_STATES.PENDING.label}</option>
          <option value={TASK_STATES.IN_PROGRESS.id}>{TASK_STATES.IN_PROGRESS.label}</option>
          <option value={TASK_STATES.COMPLETED.id}>{TASK_STATES.COMPLETED.label}</option>
        </select>
        {errors.estadoId && (
          <p className="mt-1 text-sm text-red-600" role="alert">{errors.estadoId}</p>
        )}
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t">
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              {UI_MESSAGES.SAVING}
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Guardar
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TaskForm;