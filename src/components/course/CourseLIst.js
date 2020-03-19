import React, {PropTypes} from "react";
import CourseListRow from './CourseListRow';
import './courseList.css';

const CourseList = ({coursess}) => {
  return (
    <div>
      <div>
      {coursess.map(course =>
        <CourseListRow key={course.id} course={course}/>
      )}
      </div>
    </div>
  );
};

CourseList.propTypes = {
  coursess: PropTypes.array.isRequired
};

export default CourseList;
