import axios from 'axios';

export const baseUrl = 'https://plotter-task.herokuapp.com';

export const axiosPlotter = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});
