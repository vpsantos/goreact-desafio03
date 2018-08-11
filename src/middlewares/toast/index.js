import { toast } from 'react-toastify';

const toastMiddleware = () => next => (action) => {
  if (action.toast) {
    toast(action.toast.message, { ...action.toast.options, type: action.toast.type });
  }
  return next(action);
};

export default toastMiddleware;
