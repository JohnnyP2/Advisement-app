import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Courses } from "../Interfaces/Courses";
import { Semester } from "../Interfaces/Semester";
export function AddSemesterModal({show, setShow, addSemester}:{show: boolean, setShow: (b: boolean) => void, addSemester:(s: Semester) => void}):JSX.Element{
    
    const [semsterName, setSemesterName] = useState<string>("Set Name");

    const newCourse = {} as Courses;
    newCourse.code = "--";
    newCourse.credits = "--";
    newCourse.name = "--";
    newCourse.descr = "--";
    newCourse.preReq = "--";

    function saveSemester(){
        addSemester({
            Name: semsterName,
            Courses: [newCourse, newCourse, newCourse]
        });
        setShow(false);
    }

    const hide = () => setShow(false);
    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Semester</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="editCourseForm.semesterTitleArea">
                        <Form.Label >Semester Name</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_add_semester_textbox"
                            value={semsterName}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setSemesterName(ev.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button data-testid="close-Semester-button" variant="secondary" onClick={hide}>Close</Button>
                <Button data-testid="save-Semester-button" variant="primary" onClick={saveSemester}>Save changes</Button>
            </Modal.Footer>

        </Modal>
    );
}