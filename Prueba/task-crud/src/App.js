import React, { useState } from 'react';

// Components
import { LoadingSpinner, ErrorAlert, SuccessAlert } from './components/ui';
import { Modal } from './components/modals';
import { TaskForm } from './components/forms';
import { TasksTable } from './components/tables';
import { Header, Container } from './components/layout';

// Hooks
import { useTasks, useAlert } from './hooks';

// Utils
import { UI_MESSAGES } from './utils/constants';

const App = () => {
  const { tasks, isLoading, error, loadTasks, createTask, updateTask, deleteTask } = useTasks();
  const { alert, showSuccess, showError, hideAlert } = useAlert();
  
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    mode: 'create', // 'create' | 'edit'
    task: null
  });

  const handleCreateTask = () => {
    setModalConfig({
      isOpen: true,
      mode: 'create',
      task: null
    });
  };

  const handleEditTask = (task) => {
    setModalConfig({
      isOpen: true,
      mode: 'edit',
      task
    });
  };

  const handleDeleteTask = async (taskId) => {
    const taskToDelete = tasks.find(t => t.tareaId === taskId);
    const confirmMessage = `${UI_MESSAGES.DELETE_CONFIRM}\n\nTarea: "${taskToDelete?.titulo}"`;
    
    if (!window.confirm(confirmMessage)) {
      return;
    }

    const result = await deleteTask(taskId);
    
    if (result.success) {
      showSuccess(result.message);
    } else {
      showError(result.message);
    }
  };

  const handleSubmitTask = async (taskData) => {
    let result;
    
    if (modalConfig.mode === 'create') {
      result = await createTask(taskData);
    } else {
      result = await updateTask(taskData);
    }
    
    if (result.success) {
      setModalConfig({ isOpen: false, mode: 'create', task: null });
      showSuccess(result.message);
    } else {
      showError(result.message);
    }
  };

  const handleRefresh = () => {
    loadTasks();
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, mode: 'create', task: null });
  };

  return (
    <Container>
      {/* Header */}
      <Header
        onCreateTask={handleCreateTask}
        onRefresh={handleRefresh}
        isLoading={isLoading}
        taskCount={tasks.length}
      />

      {/* Alerts */}
      {alert.show && alert.type === 'error' && (
        <ErrorAlert message={alert.message} onClose={hideAlert} />
      )}
      {alert.show && alert.type === 'success' && (
        <SuccessAlert message={alert.message} onClose={hideAlert} />
      )}
      
      {/* Error from API */}
      {error && !alert.show && (
        <ErrorAlert message={error} />
      )}

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Lista de Tareas ({tasks.length})
            </h2>
            <div className="flex items-center space-x-2">
              {isLoading && <LoadingSpinner size="sm" message="" />}
            </div>
          </div>
          
          {isLoading && tasks.length === 0 ? (
            <LoadingSpinner />
          ) : (
            <TasksTable
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={modalConfig.mode === 'create' ? 'Crear Nueva Tarea' : 'Editar Tarea'}
        size="md"
      >
        <TaskForm
          task={modalConfig.task}
          onSubmit={handleSubmitTask}
          onCancel={closeModal}
          isLoading={isLoading}
        />
      </Modal>
    </Container>
  );
};

export default App;