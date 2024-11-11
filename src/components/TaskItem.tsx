import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <div className="flex items-center justify-between p-2 bg-gray-800 rounded-md">
    <div className="flex items-center">
      <input type="checkbox" checked={task.isCompleted} onChange={onToggle} />
      <span className={`ml-2 ${task.isCompleted ? 'line-through' : ''}`}>{task.title}</span>
    </div>
    <button onClick={onDelete} className="text-red-500">Delete</button>
  </div>
);

export default TaskItem;
