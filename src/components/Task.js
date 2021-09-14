import classes from './Task.module.css';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelite, onToggle }) => {
    return (
        <div className={`${ task.reminder ? 
                       [classes.reminder, classes.task].join(' ') : classes.task}`}  
                        onDoubleClick={()=> (onToggle(task.id))}>
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
