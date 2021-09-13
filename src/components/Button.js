import classes from './Button.module.css'


const Button = (props) => {

    return (
            <button className={classes.btn} 
                    style={ {backgroundColor: props.color} }
                    onClick={props.onClick}>
                    {props.text}
            </button>
    )
} 

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}



export default Button;
