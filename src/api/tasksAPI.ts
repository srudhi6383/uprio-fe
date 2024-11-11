import axios from 'axios';
import { Task } from '../types';

const API_URL = 'https://uprio-be.onrender.com/tasks';

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (task: Task): Promise<Task> => {
  const response = await axios.put(`${API_URL}/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const toggleTaskStatus = async (id: string): Promise<Task> => {
  const response = await axios.patch(`${API_URL}/${id}`, { toggleStatus: true });
  return response.data;
};
