import classes from './AddTask.module.css';

const AddTask = () => {
    return (
        <form className={classes.addForm}>

            <div className={classes.formControl}>
                <label>Task</label>
                <input type='text' placeholder='Add Task' />
            </div>

            <div className={classes.formControl}>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' />
            </div>
            <div className={[classes.formControl, classes.formControlCheck].join(' ')}>
                <label>Set Reminder</label>
                <input type='checkbox' />
            </div>
            
            <input type='submit' value='Save Task'
            className={[classes.btn, classes.btn_block].join(' ')} /> 
        </form>
    )
}

export default AddTask
