import { useState } from 'react';

const useAlert = (autoHideDuration = 5000) => {
  const [alert, setAlert] = useState({
    type: '', // 'success' | 'error' | 'warning' | 'info'
    message: '',
    show: false
  });

  const showAlert = (type, message) => {
    setAlert({ type, message, show: true });
    
    if (autoHideDuration > 0) {
      setTimeout(() => {
        hideAlert();
      }, autoHideDuration);
    }
  };

  const hideAlert = () => {
    setAlert(prev => ({ ...prev, show: false }));
  };

  const showSuccess = (message) => showAlert('success', message);
  const showError = (message) => showAlert('error', message);
  const showWarning = (message) => showAlert('warning', message);
  const showInfo = (message) => showAlert('info', message);

  return {
    alert,
    showAlert,
    hideAlert,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
};

export default useAlert;