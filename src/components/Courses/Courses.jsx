import { useEffect,useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({handlePurchase}) => {

    const[courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    })

    return (
        <div  className="w-2/3">
            <h1 className="text-3xl font-bold mb-5">Courses:{courses.length}</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
           {
                courses.map(course => <Course handlePurchase={handlePurchase} key={course.id} course={course}></Course>)
            }
           </div>
            
        </div>
    );
};

Courses.propTypes={
    handlePurchase:PropTypes.func
}
export default Courses;