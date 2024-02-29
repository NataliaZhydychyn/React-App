import './Modal.css'

export default function Modal({ children }) {
    return (
        <dialog open>{children}</dialog>
    )
}