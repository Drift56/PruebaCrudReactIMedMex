import { TASK_STATES } from './constants';

export const getTaskStateInfo = (estadoId) => {
  switch (estadoId) {
    case 1: return TASK_STATES.PENDING;
    case 2: return TASK_STATES.IN_PROGRESS;
    case 3: return TASK_STATES.COMPLETED;
    default: return { label: 'Desconocido', color: 'bg-gray-100 text-gray-800' };
  }
};

export const formatTaskForDisplay = (task) => {
  return {
    ...task,
    stateInfo: getTaskStateInfo(task.EstadoId)
  };
};

export const createEmptyTask = () => ({
  TareaId: 0,
  Titulo: '',
  EstadoId: 1
});