import React from 'react';
const CourseCard = (props) => {
  return (
    <div class="courseCard">
        <img src={props.image} alt="courseImage"></img>
        <p className="courseTitle">{props.title}</p>
        <p className="coursePresenter">{props.presenter}</p>
        <span className="courseRating">{props.rating}</span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <p className="coursePrice">{props.price}</p>
    </div>
  )
}

export default CourseCard;