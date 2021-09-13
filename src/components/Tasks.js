import Task from "./Task";

const Tasks = ({tasks, onDelite, onToggle }) => {
    return (
        <div>
          {tasks.map((task) => (
          <Task key={task.id} task={task} onDelite={onDelite} onToggle={onToggle}
          />
          ))}  
        </div>
    )
}
export default Tasks
