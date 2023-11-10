import React, { useState } from "react";
import {Table, Tab, Tabs, Button} from "react-bootstrap";
import { Courses } from "../Interfaces/Courses";
import { CourseRow } from "./CourseRow";
import { Semester } from "../Interfaces/Semester";
import cloneDeep from 'lodash/cloneDeep';
import { AddSemesterModal } from "./AddSemester";


export function SemesterTable({initialSemesters}: {initialSemesters:Semester[]}): JSX.Element{
    const[semester, setSemester] = useState(initialSemesters);
    const[show, setShow] = useState(false);
    
    const removeCourseRow = (title:string, course: string) => {
        for (let i = 0; i < semester.length; i++) {
            if (semester[i].Name === title) {
                const newSemesterArr = [...semester];
                const newCourseArr = newSemesterArr[i].Courses.filter(courseRow => !courseRow.code.includes(course));
                newSemesterArr[i].Courses = [...newCourseArr];
                setSemester(newSemesterArr);
            }
        }
    };
    function editCourse(oldCourseData: Courses, newCourseData: Courses, semesterName: string) {
        for (let i = 0; i < semester.length; i++) {
            if (semester[i].Name === semesterName) {
                const newArr = cloneDeep(semester);
                for (let j = 0; j<newArr[i].Courses.length; j++) {
                    if (newArr[i].Courses[j].code === oldCourseData.code) {
                        newArr[i].Courses[j] = newCourseData;
                        setSemester(newArr);
                    }
                }    
            }
        }
    }

    function addSemester(newSemester: Semester){
        setSemester([...semester, newSemester]);
    }

    function showAddSemester(){
        setShow(true);
    }

    const handleAddRow = (SemesterName: string) => {
        const newCourse = {} as Courses;
        newCourse.code = "--";
        newCourse.credits = "--";
        newCourse.name = "--";
        newCourse.descr = "--";
        newCourse.preReq = "--"
        for (let i = 0; i < semester.length; i++) {
            if (semester[i].Name === SemesterName) {
                const newArr = [...semester];
                newArr[i].Courses = [...newArr[i].Courses, newCourse];
                setSemester([...newArr]);
            }
        }
    };

    return(
        <div>
            <Tabs defaultActiveKey={semester[0].Name} id = "Semester_tabs" className = "mb-3">
                {semester.map(singleSemester => {
                    return(
                        <Tab key={singleSemester.Name} eventKey = {singleSemester.Name} title = {singleSemester.Name}>
                            <Table>
                                <tbody>
                                    {singleSemester.Courses.map((course: Courses) => {
                                        return(
                                            <div key={course.code}>
                                                <CourseRow course={course} removeCourse = {()=>removeCourseRow(singleSemester.Name, course.code)} editCourse={editCourse} semesterName = {singleSemester.Name}></CourseRow>
                                            </div>
                                        );
                                    })}
                                </tbody>
                            <Button variant = 'success' onClick = {() => handleAddRow(singleSemester.Name)}>Add Empty Row</Button>
                            </Table>
                        </Tab>           
                    );
                })}
                <Tab eventKey="add_semester_tab" title={<Button variant = 'success' onClick = {showAddSemester}>Add Semester</Button>}></Tab>
            </Tabs>
            <AddSemesterModal show={show} setShow={setShow} addSemester={addSemester}></AddSemesterModal>
        </div>
    );
}