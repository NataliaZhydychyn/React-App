import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name:'',
        hasError: true,
        reason: 'help'
    })

    // const [name, setName] = useState('');
    // const [reason, setReason] = useState('help');
    // const [hasError, setHasError] = useState(false);

    function handleNameChange(event) {
        // setName(event.target.value);
        // setHasError(event.target.value.trim().length === 0);
        setForm({
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        })
    }

    return (
        <section>
            <h3>Feedback</h3>

            <form>
                <label htmlFor="name">Your name</label>
                <input 
                    type="text" 
                    id="name" 
                    className="control" 
                    value={form.name}
                    onChange={handleNameChange}
                    style={{
                        border: form.hasError? '1px solid red' : null
                    }}
                />  

                <label htmlFor="reason">Reason for appeal</label>
                <select 
                    id="reason" 
                    className="control" 
                    value={form.reason}
                    onChange={(event) => setReason(event.target.value)}
                >
                    <option value="error">Error</option>
                    <option value="help">Assistance</option>
                    <option value="suggest">Suggestion</option>
                </select>  
                <pre>
                    Name: {form.name};
                    Reason: {form.reason};
                </pre> 

                <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>      
            </form>
        </section>
    )
}