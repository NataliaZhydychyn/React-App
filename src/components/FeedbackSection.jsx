import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('help');
    const [hasError, setHasError] = useState('help');

    function handleNameChange(event) {
        setName(event.target.value);
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
                    value={name}
                    onChange={handleNameChange}
                    style={{
                        border: name.trim().length ? null : '1px solid red'
                    }}
                />  

                <label htmlFor="reason">Reason for appeal</label>
                <select 
                    id="reason" 
                    className="control" 
                    value={reason}
                    onChange={(event) => setReason(event.target.value)}
                >
                    <option value="error">Error</option>
                    <option value="help">Assistance</option>
                    <option value="suggest">Suggestion</option>
                </select>  
                <pre>
                    Name: {name};
                    Reason: {reason};
                </pre> 

                <Button>Send</Button>      
            </form>
        </section>
    )
}