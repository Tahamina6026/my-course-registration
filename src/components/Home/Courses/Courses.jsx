import { useEffect } from "react";
import { useState } from "react";


const Courses = () => {
    const [courses , setCourses] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json)
        .then(data => setCourses  (courses) )
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Courses;