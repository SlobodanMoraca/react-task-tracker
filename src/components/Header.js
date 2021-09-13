import classes from './Header.module.css'
import Button from './Button'

const Header = (props) => {
    const onClick = () =>{
        console.log('Hi bob');
    }


    return (
        <header className={classes.header}>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Generic title',
}

export default Header;
