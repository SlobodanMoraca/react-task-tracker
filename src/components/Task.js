import classes from './Task.module.css';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelite, onToggle }) => {
    return (
        <div className={`${classes.task} ${ task.reminder ? classes.reminder : ''}`}  onDoubleClick={()=> (onToggle(task.id))}>
            <h3>{task.text} 
            <FaTimes className={classes.delBtn} 
            onClick={() => onDelite(task.id)}
            /> 
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
