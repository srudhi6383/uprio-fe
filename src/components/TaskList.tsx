import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Task } from '../types';
import { deleteTask, updateTask } from '../redux/tasksSlice';
import { RootState } from '../redux/store';
import { HiCheckCircle, HiTrash, HiOutlineClock } from 'react-icons/hi';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleComplete = (task: Task) => {
    dispatch(updateTask({ ...task, isCompleted: !task.isCompleted }));
  };

  return (
    <div className="w-96 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Your Tasks</h2>
      {tasks.map((task: Task) => (
        <div
          key={task.id}
          className={`bg-white p-4 mb-4 rounded-lg shadow-md border-l-4 ${task.priority === 'high' ? 'border-red-500' : task.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'} transition-transform transform hover:scale-105`}
        >
          <h3 className={`text-lg font-semibold ${task.isCompleted ? 'line-through text-gray-400' : ''}`}>
            {task.title}
          </h3>
          <p className="text-gray-600">{task.description}</p>
          <p className="text-sm text-gray-500 flex items-center"><HiOutlineClock className="mr-1" /> Due: {task.dueDate}</p>
          <p className={`text-sm font-medium ${task.priority === 'high' ? 'text-red-600' : task.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'}`}>
            Priority: {task.priority}
          </p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handleComplete(task)}
              className={`flex items-center py-1 px-3 rounded ${task.isCompleted ? 'bg-green-500' : 'bg-yellow-500'} text-white hover:shadow-md transition`}
            >
              <HiCheckCircle className="mr-1" />
              {task.isCompleted ? 'Completed' : 'Complete'}
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="flex items-center py-1 px-3 bg-red-500 text-white rounded hover:shadow-md transition"
            >
              <HiTrash className="mr-1" />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;