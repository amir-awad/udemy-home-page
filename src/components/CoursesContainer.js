import React from 'react';
import CourseCard from './CourseCard';
import Course1Img from '../assets/course1.jpg';
import Course2Img from '../assets/course2.jpg';
import Course3Img from '../assets/course3.jpg';
import Course4Img from '../assets/course4.jpg';
import Course5Img from '../assets/course5.jpg';

function CoursesContainer() {
    let courses = [
        {id:1, image:Course1Img, title:"Learn Python: The Complete Python Programming Course",presenter:"Avinash Jain, The Codex", rating:"5",price:"E£679.99"},
        {id:2, image:Course2Img, title:"Learning Python for Data Analysis and Visualization",presenter:"Jose Portilla", rating:"5",price:"E£1,599.99"},
        {id:3, image:Course3Img, title:"Python for Beginners - Learn Programming from scratch",presenter:"Edwin Diaz, Coding Faculty Solutions", rating:"5",price:"E£679.99"},
        {id:4, image:Course4Img, title:"Learn Python: Python for Beginners",presenter:"Abrar Hussain", rating:"5",price:"E£319.99"},
        {id:5, image:Course5Img, title:"Python Beyond the Basics - Object-Oriented",presenter:"Infinite Skills", rating:"5",price:"E£519.99"}
    ];
    
    const createCoursesCards = () => {
        return courses.map((course) => {
            return <CourseCard image={course.image} title={course.title} presenter={course.presenter} rating={course.rating} price={course.price} key={course.id} ></CourseCard>
        });
    }
    
    return  <div className="coursesCards">{createCoursesCards()}</div>
}

export default CoursesContainer;
