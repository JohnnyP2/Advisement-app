import { Courses } from "../Interfaces/Courses";
import { Semester } from "../Interfaces/Semester";
import catalog from "./catalog.json";

const COURSES: Courses[] = Object.values(catalog)
    .flat()
    .map((category) => Object.values(category).flat())
    .flat()
    .map((code) => ({ ...code}));

const semester1 = {} as Semester;
    semester1.Name = "First Year Fall";
    semester1.Courses = [COURSES[2002] as Courses, COURSES[4881] as Courses];

const semester2 = {} as Semester;
    semester2.Name = "First Year Spring";
    semester2.Courses = [COURSES[2005] as Courses, COURSES[4882] as Courses];

export const initialSemester = [semester1, semester2];