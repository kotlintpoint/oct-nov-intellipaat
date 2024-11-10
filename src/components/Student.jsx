import React from 'react'
import PropTypes from 'prop-types';

// firstName, lastName, email, age, rank 
const Student = (props) => {
  return (
    <div>
        <h2>Student Details</h2>
        <p>First Name - {props.firstName}</p>
        <p>Last Name - {props.lastName}</p>
        <p>Email - {props.email}</p>
        <p>Age - {props.age}</p>
        <p>Rank - {props.rank}</p>
    </div>
  )
}

Student.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    rank: PropTypes.number.isRequired
}

export default Student
