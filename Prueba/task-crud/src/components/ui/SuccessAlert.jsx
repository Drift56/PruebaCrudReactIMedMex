import React from 'react';
import { X } from 'lucide-react';

const SuccessAlert = ({ message, onClose }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 flex items-center">
    <div className="h-5 w-5 bg-green-500 rounded-full mr-2 flex items-center justify-center flex-shrink-0">
      <div className="h-2 w-2 bg-white rounded-full"></div>
    </div>
    <span className="text-green-700 flex-1">{message}</span>
    {onClose && (
      <button
        onClick={onClose}
        className="text-green-500 hover:text-green-700 transition-colors ml-2"
        aria-label="Cerrar alerta"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </div>
);

export default SuccessAlert;