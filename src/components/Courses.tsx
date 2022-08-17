import '../index.css';

import React, { useState } from 'react';

export const Courses = () => {
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title">Courses</h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
          <div className={isInputActive ? 'group-input active' : 'group-input'}>
            <form className="group-form" action="">
              <label htmlFor="">Course name:</label>
              <input type="text" />
              <label htmlFor="">Credits:</label>
              <input type="text" />
              <button className="submit-btn" type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
          <button
            className={isInputActive ? 'add-student-btn inactive' : 'add-student-btn'}
            onClick={() => {
              setIsInputActive(!isInputActive);
            }}
          >
            Add course
          </button>
        </div>
        <table className="group-table">
          <thead>
            <tr>
              <th>Course name</th>
              <th>Credit number</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
