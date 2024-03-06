import { useCallback, useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectSection() {
    const input = useInput();
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersList = await response.json();
        setUsers(usersList);
        setLoading(false);
    }, [])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    return (
        <section>
            <h3>Effects</h3>
            <Button style={{marginBottom: '1rem'}} onButtonClick={() => setModal(true)}>Open information</Button>

            <Modal open={modal}>
                <h3>Hello from modal!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus error sit, ad rem placeat voluptas voluptatum accusamus at molestiae dolores.</p>
                <Button onButtonClick={() => setModal(false)}>Close modal</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && 
            <>  
                <input type="text" className="control" {...input} />          
                <ul>
                    {users
                    .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
                    .map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            </>}
        </section>
    )
}