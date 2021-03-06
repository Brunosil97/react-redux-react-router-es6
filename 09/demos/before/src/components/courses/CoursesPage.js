import React from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/CourseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {

    state = {
      course: {
        title: ""
      }
    };

  handleChange = (event) => {
    const course = {...this.state.course, title: event.target.value};
    this.setState({course});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.course.title}
        />

        <input type="submit" value="Save"/>

        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes= {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
    //you can bind the actions and now access them directly when calling them
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
