import {Modal, Button} from "react-bootstrap";
import React, {useState} from "react";
import InputModal from "./InputModal"

export function WelcomeModal(): JSX.Element{
    const [show, setShow] = useState(true);
    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);

    return(
            <><Button variant = "warning" onClick = {openModal}>
                Get Started
                </Button><Modal show = {show} onHide = {closeModal}>
                 <Modal.Header closeButton>
                     <Modal.Title>
                        About this Advising Tool
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Welcome to the Advising Tool! This website will help you figure out what classes you should take based on what you have taken already. It will also give you advice on what classes to take next.
                </Modal.Body>
                    <Modal.Footer>
                        <InputModal></InputModal>
                    </Modal.Footer>
            </Modal>
        </>
    );
}
