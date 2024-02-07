import Button from "../Button/Button";
import { differences } from "../../data";
import { useState } from 'react';

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
      console.log('button clicked', type);
      setContentType(type);
    }

    return (
        <section>
          <h3>How are we unique compared to others?</h3>
          <Button 
            isActive={contentType === 'way'} 
            onButtonClick={() => handleClick('way')}
          >
            Approach
          </Button>
          <Button 
            isActive={contentType === 'easy'} 
            onButtonClick={() => handleClick('easy')}
          >
            Approach
          </Button>
          <Button 
            isActive={contentType === 'program'} 
            onButtonClick={() => handleClick('program')}
          >
            Approach
          </Button>
          { !contentType && <p>Press on button</p>}
          { contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}