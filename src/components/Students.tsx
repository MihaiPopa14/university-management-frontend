import '../index.css';

import React, { useState } from 'react';

export const Students = () => {
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title">Students table</h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
          <div className={isInputActive ? 'student-input active' : 'student-input'}>
            <form className="student-form" action="">
              <label htmlFor="">Name:</label>
              <input type="text" />
              <label htmlFor="">Surname:</label>
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
            Add student
          </button>
        </div>
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Group</th>
              <th>Grades</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
