import { useEffect,useState } from "react";
import Course from "../Course/Course";


const Courses = () => {

    const[courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    })

    return (
        <div>
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;