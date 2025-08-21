
import React from 'react';
import { UI_MESSAGES } from '../../utils/constants';

const LoadingSpinner = ({ message = UI_MESSAGES.LOADING, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className={`animate-spin rounded-full ${sizeClasses[size]} border-b-2 border-blue-600`}></div>
      <span className="ml-2 text-gray-600">{message}</span>
    </div>
  );
};

export default LoadingSpinner;