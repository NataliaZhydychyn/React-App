import classes from './Button.module.css'

export default function Button({ children, onButtonClick, isActive, ...props }) {

    return (
        <button 
            {...props}
            className={
                isActive ? `${classes.button} ${classes.active}` : classes.button
            }
            onClick={onButtonClick}
        >
            {children}
        </button>
    )
}