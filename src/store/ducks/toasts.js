export const ToastTypes = {
  default: 'default',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
};

export const buildToast = (message, type = 'default', options) => ({
  message,
  type,
  options,
});

export default (message, type = 'default', options) => ({
  type: 'SHOW_TOAST',
  toast: buildToast(message, type, options),
});
