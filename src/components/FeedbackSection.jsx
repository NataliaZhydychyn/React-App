import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name:'',
        hasError: false,
        reason: 'help'
    })

    function handleNameChange(event) {
        // setForm({
        //     name: event.target.value,
        //     hasError: event.target.value.trim().length === 0,
        //     reason: form.reason
        // })
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
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
                    onChange={(event) => setForm((prev) => ({ 
                        ...prev, 
                        reason: event.target.value
                    }))}
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