import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center min-h-screen bg-red-300 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Task Management</h1>
      <div className="flex flex-row space-x-8">
        <TaskForm />
        <TaskList />
      </div>
    </div>
    </Provider>
  );
};

export default App;
