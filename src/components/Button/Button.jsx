import './Button.css'

export default function Button({ children, onButtonClick, isActive }) {

    return (
        <button 
            className={isActive ? 'button active' : 'button'}
            onClick={onButtonClick}
        >
            {children}
        </button>
    )
}