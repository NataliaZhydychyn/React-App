import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {

    function openModal() {
        console.log('blablabla')

    }

    return (
        <section>
            <h3>Effects</h3>
            <Button onButtonClick={openModal}>Open information</Button>

            <Modal>
                <h3>Hello from modal!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus error sit, ad rem placeat voluptas voluptatum accusamus at molestiae dolores.</p>
            </Modal>
        </section>
    )
}