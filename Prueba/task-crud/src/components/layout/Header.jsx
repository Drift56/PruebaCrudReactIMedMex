import React from 'react';
import { Plus, RefreshCw } from 'lucide-react';

const Header = ({ onCreateTask, onRefresh, isLoading, taskCount = 0 }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Tareas</h1>
          <p className="mt-1 text-sm text-gray-600">
            Administra y organiza tus tareas de manera eficiente
          </p>
          <div className="mt-2 text-xs text-gray-500">
            Total de tareas: <span className="font-medium">{taskCount}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="inline-flex items-center px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
            title="Actualizar lista"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Actualizar
          </button>
          <button
            onClick={onCreateTask}
            disabled={isLoading}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nueva Tarea
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;