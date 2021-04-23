import { axiosPlotter } from './axiosInstances';
import { notification } from 'antd';

export default () => {
  axiosPlotter.interceptors.request.use(req => {
    return requestInterceptor(req);
  });

  axiosPlotter.interceptors.response.use(
    res => res,
    error => {
      return responseInterceptor(error);
    }
  );
};

export const requestInterceptor = req => {
  console.log({ req });
  return Promise.resolve(req);
};

export const responseInterceptor = error => {
  console.log({ error });
  notification.error({
    message: 'Error',
    description: error.message ?? 'Error',
  });
  return Promise.reject(error);
};
