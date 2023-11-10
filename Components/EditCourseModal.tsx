import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Courses } from "../Interfaces/Courses";

export function EditCourseModal({visible, setVisible, editCourse, course, semesterName}:
    {visible: boolean, setVisible: (b: boolean) => void,
    editCourse: (oldCourseData: Courses, newCoureData: Courses, name: string) => void, course: Courses, semesterName: string}): JSX.Element {
    const [courseCode, setCourseCode] = useState(course.code);
    const [courseCredits, setCourseCredits] = useState(course.credits);
    const [courseName, setCourseName] = useState(course.name);
    const [courseDescription, setCourseDescription] = useState(course.descr);
    const [coursePrereq, setCoursePrereq] = useState(course.preReq);
    const [courseRestrict] = useState(course.restrict);
    const [courseBreadth] = useState(course.breadth);
    const [courseTyp,] = useState(course.typ);
    function saveCourse() {
        const newCourse = {
            code: courseCode,
            credits: courseCredits,
            name: courseName,
            descr: courseDescription,
            preReq: coursePrereq,
            restrict: courseRestrict,
            breadth: courseBreadth,
            typ: courseTyp
        };
        editCourse(course, newCourse, semesterName);
        setVisible(false);
    }

    const hide = () => setVisible(false);
    return (
        <Modal show={visible} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="editCourseForm.courseNumberArea">
                        <Form.Label >Course code</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_number_textbox"
                            value={courseCode}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseCode(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="editCourseForm.courseCreditsArea">
                        <Form.Label>Credits</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_credits_textbox"
                            value={courseCredits}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseCredits(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="editCourseForm.courseNameArea">
                        <Form.Label>Course name</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_name_textbox"
                            value={courseName}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseName(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="editCourseForm.courseDescriptionArea">
                        <Form.Label>Course description</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_description_textbox"
                            value={courseDescription}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseDescription(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="editCourseForm.coursePrereqArea">
                        <Form.Label>Course prerequisites</Form.Label>
                        <Form.Control as="textarea" rows={3} data-testid = "modal_course_Prereq_textbox"
                            value={coursePrereq}
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCoursePrereq(ev.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button data-testid="close-button" variant="secondary" onClick={hide}>Close</Button>
                <Button data-testid="save-changes-button" variant="primary" onClick={saveCourse}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}