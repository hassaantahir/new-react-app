import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import CourseList from "./CourseLIst";
import {browserHistory} from "react-router";
// import CourseListRow from "./CourseListRow";

class ShowCoursesPage extends  React.Component {

  constructor(props) {
    super(props);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <div>
          <input
            type="submit"
            value="Add Course"
            className="btn btnn btn-primary center"
            onClick={this.redirectToAddCoursePage}
          />
        </div>
        <CourseList coursess={this.props.courses} />
      </div>
    );
  }
}

ShowCoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
  // actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}


export default connect(mapStateToProps)(ShowCoursesPage);
