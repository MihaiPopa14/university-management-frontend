import '../index.css';

import React, { useState } from 'react';

export const Professors = () => {
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title">Professors</h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
          <div className={isInputActive ? 'group-input active' : 'group-input'}>
            <form className="group-form" action="">
              <label htmlFor="">Name:</label>
              <input type="text" />
              <label htmlFor="">Surname:</label>
              <input type="text" />
              <label htmlFor="">Title:</label>
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
            Add professor
          </button>
        </div>
        <table className="group-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
