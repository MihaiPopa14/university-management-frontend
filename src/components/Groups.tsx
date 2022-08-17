import '../index.css';

import React, { useState } from 'react';

export const Groups = () => {
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title">Groups table</h1>
        <div className={isInputActive ? "student-controls large" : 'student-controls small' }>
          <div className={isInputActive ? 'group-input active' : 'group-input'}>
            <form className="group-form" action="">
              <label htmlFor="">Number:</label>
              <input type="text" />
              <label htmlFor="">Field:</label>
              <input type="text" />
              <label htmlFor="">Year:</label>
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
            Add group
          </button>
        </div>
        <table className="group-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Field</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
