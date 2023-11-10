import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { AutoComplete } from './AutoComplete';

export default function InputModal(): JSX.Element {
    const [showInput, setInputShow] = useState(false);
    const closeInputModal = () => setInputShow(false);
    const openInputModal = () => setInputShow(true);

    var major: string;
    var concentration: string;
    var gradYear: string;

    const options = [
        { value: '', text: 'Choose a major' },
        { value: 'ComputerScienceBS', text: 'Computer Science B.S.' },
        { value: 'ComputerScienceBA', text: 'Computer Science B.A.' },
    ];

    const concentrationOptions = [
        { value: '', text: 'Choose a concentration' },
        { value: 'AI', text: 'Artificial Intelligence and Robotics' },
        { value: 'B', text: 'Bioinformatics' },
        { value: 'C', text: 'Cybersecurity' },
        { value: 'D', text: 'Data Science' },
        { value: 'H', text: 'High Performance Computing' },
        { value: 'S', text: 'Systems and Networks' },
        { value: 'T', text: 'Theory and Computation' },
        { value: 'TRAD', text: 'Traditional Program with Custom Focus Area' },
    ];

    const graduationOptions = [
        { value: '', text: 'Choose your expected graduation date' },
        { value: '2023', text: '2023' },
        { value: '2024', text: '2024' },
        { value: '2025', text: '2025' },
        { value: '2026', text: '2026' },
        { value: '2027', text: '2027' },
        { value: '2028', text: '2028' },
        { value: '2029', text: '2029' },
    ];

    const [selected, setSelected] = useState(options[0].value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSelected(event.target.value);
    }

    function saveInfo() {
        closeInputModal();
        localStorage.setItem('major', JSON.stringify(major));
        localStorage.setItem('concentration', JSON.stringify(concentration));
        localStorage.setItem('gradYear', JSON.stringify(gradYear));
        console.log(major);
        console.log(concentration);
        console.log(gradYear);
    }

    return (
        <><Button variant="warning" onClick={openInputModal}>Enter my Information</Button>
            <Modal show={showInput} onHide={closeInputModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Enter your information.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Select your major</Form.Label>
                            <Form.Select onChange={e=>major = e.target.value}>
                                {options.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Select your concentration</Form.Label>
                            <Form.Select onChange={e=>concentration = e.target.value}>
                            {concentrationOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Select your expected graduation date</Form.Label>
                            <Form.Select onChange={e=>gradYear = e.target.value}>
                            {graduationOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter the courses that you have taken</Form.Label>
                            <AutoComplete></AutoComplete>
                        </Form.Group>
                        <Button variant="primary" onClick={saveInfo}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}
