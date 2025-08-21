import { VALIDATION_RULES } from './constants';

export const validateTaskForm = (formData) => {
  const errors = {};
  
  // Validate title
  if (!formData.Titulo?.trim()) {
    errors.Titulo = 'El título es obligatorio';
  } else if (formData.Titulo.trim().length < VALIDATION_RULES.TITLE_MIN_LENGTH) {
    errors.Titulo = `El título debe tener al menos ${VALIDATION_RULES.TITLE_MIN_LENGTH} caracteres`;
  } else if (formData.Titulo.trim().length > VALIDATION_RULES.TITLE_MAX_LENGTH) {
    errors.Titulo = `El título no puede exceder ${VALIDATION_RULES.TITLE_MAX_LENGTH} caracteres`;
  }

  // Validate state
  if (!formData.EstadoId || formData.EstadoId < 1) {
    errors.EstadoId = 'El estado es obligatorio';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};