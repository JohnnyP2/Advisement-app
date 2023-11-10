import React, {useState} from "react";
import { Courses } from "../Interfaces/Courses";
import { Table, Button, Modal } from "react-bootstrap";
import { EditCourseModal } from "./EditCourseModal";

export function CourseRow({course, removeCourse, editCourse, semesterName}: {course: Courses, semesterName: string, removeCourse:(c:string) => void, editCourse: (oldc: Courses, newc: Courses, t: string) => void}): JSX.Element{
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);
    return(
        <div>
            <Table>
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Credits</th>
                            <th>Prerequisites</th>
                            <th>Description</th>
                            <th><Button variant = 'danger' onClick = {()=>removeCourse(course.code)}>X</Button></th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                            <td>{course.preReq}</td>
                            <td>
                                <Button variant = "warning" onClick = {openModal}>
                                     Course Description
                                </Button><Modal show = {show} onHide = {closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        About {course.name}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {course.descr}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant = "warning" onClick = {closeModal}>Close</Button>
                                </Modal.Footer>
                                </Modal>
                            </td>
                            <td><Button variant='success' onClick = {() => setVisible(true)}>Edit Course</Button></td>
                        </tr>
                        <EditCourseModal visible = {visible} setVisible={setVisible} editCourse={ editCourse }  course={ course } semesterName = {semesterName}></EditCourseModal>
                    </tbody>
                </Table>
        </div>
    );
}