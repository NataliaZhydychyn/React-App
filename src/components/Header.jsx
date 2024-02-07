import { useState } from 'react';
import logo from '/logo-name.svg'

export default function Header() {
    const [timeNow, setTimeNow] = useState(new Date());
    setInterval(() => setTimeNow(new Date()), 1000);

    return (
        <header>
            <img src={logo} alt="Result" />
            <h3> Result University </h3>
            <span> Time is: {timeNow.toLocaleTimeString()} </span>
        </header>
    )
}