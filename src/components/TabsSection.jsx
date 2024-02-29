import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
    return (
        <section style={{ marginBottom: '1rem' }}>
            <Button 
                isActive={active === 'main'} 
                onButtonClick={() => onChange('main')}
            >
                Main
            </Button>
            <Button 
                isActive={active === 'feedback'} 
                onButtonClick={() => onChange('feedback')}
            >
                Feedback
            </Button>
            <Button 
                isActive={active === 'effect'} 
                onButtonClick={() => onChange('effect')}
            >
                Effect
            </Button>
        </section>
    )
}