import React, {PropTypes} from "react";
import {Link} from 'react-router';
import './courseListRow.css';

const CourseListRow = ({course}) => {
  return (
    <div className="compo">
      <div className="bottom">
        <div className="circle"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png"/></div>
        <p className="in padleftt"> <Link to={'/course/' + course.id} > {course.title} </Link> </p>
        <p className="in padleft">By  <span>{course.authorId}</span></p>
        <div className="in right buton">
          <div className="in chez">{course.category}</div>
          <div className="in time">{course.length}</div>
        </div>
      </div>
    </div>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
