
import React from 'react';
import { AlertCircle, X } from 'lucide-react';

const ErrorAlert = ({ message, onClose }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-center">
    <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
    <span className="text-red-700 flex-1">{message}</span>
    {onClose && (
      <button
        onClick={onClose}
        className="text-red-500 hover:text-red-700 transition-colors ml-2"
        aria-label="Cerrar alerta"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </div>
);

export default ErrorAlert;