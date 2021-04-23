import { axiosPlotter } from '../axios/axiosInstances';

export const getColumns = () => axiosPlotter.get('/columns');

export const getData = body => axiosPlotter.get('/data', body);
