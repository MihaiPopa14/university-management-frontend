import '../index.css';

import React, { MouseEvent, useEffect, useState } from 'react';
import {
  StateStructure,
  studentsCountSelector,
  studentsSelector
} from '../features/student/selectors';
import {
  addStudent,
  getStudents,
  getStudentsFailed,
  getStudentsSuccess
} from '../features/student/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Student } from '../types/Student';
import { fetchStudents } from '../features/student/apiCalls';
import { useNavigate } from 'react-router-dom';
import { useUpdateEffect } from '../hooks/useUpdateEffect';

export const Students = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const studentsCount: number = useSelector((state: StateStructure) =>
    studentsCountSelector(state)
  );

  useEffect(() => {
    //fetchStudents();
    const example = async () => {
      dispatch(getStudents());
      try {
        const response = await fetchStudents();
        dispatch(getStudentsSuccess(response));
      } catch (error) {
        dispatch(getStudentsFailed());
      }
    };
    example();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useUpdateEffect(() => navigate('/students'), [studentsCount]);
  const [isInputActive, setIsInputActive] = useState(false);
  const [nameText, setNameText] = useState('');
  const [surNameText, setSurNameText] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>, setterMethod: Function) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    setterMethod(e.target.value);
  };

  const handleSubmit = (e: MouseEvent) => {
    addStudentReq(e);
    setNameText('');
    setSurNameText('');
  }; //To be fixed

  const students: Array<Student> = useSelector((state: StateStructure) => studentsSelector(state));

  const addStudentReq = async (event: MouseEvent) => {
    event.preventDefault();
    const newStudent: Student = {
      name: nameText,
      surName: surNameText
    };
    dispatch(addStudent(newStudent));
  };

  const validForm: boolean = nameText.length !== 0 && surNameText.length !== 0;

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title">Students table</h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
          <div className={isInputActive ? 'student-input active' : 'student-input'}>
            <form className="student-form" action="">
              <label htmlFor="">Name:</label>
              <input type="text" onChange={e => onNameChange(e, setNameText)} />
              <label htmlFor="">Surname:</label>
              <input type="text" onChange={e => onNameChange(e, setSurNameText)} />
              <button
                disabled={!validForm}
                className={!validForm ? 'disabled' : 'submit-btn'}
                onClick={e => handleSubmit(e)}
              >
                Submit
              </button>
            </form>
          </div>
          {showSuccessMsg && <p>Student added successfully!</p>}
          {showErrorMsg && <p>Error while adding student!</p>}
          <button
            className={isInputActive ? 'add-student-btn inactive' : 'add-student-btn'}
            onClick={() => {
              setIsInputActive(!isInputActive);
            }}
          >
            Add student
          </button>
        </div>
        <div className="sticky-header-table">
          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Group</th>
                <th>Grades</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 &&
                students.map((st: Student, index: number) => {
                  return (
                    <tr key={`rok-${index}`}>
                      <td>{st.name}</td>
                      <td>{st.surName}</td>
                      <td>{st.surName}</td>
                      <td>{st.surName}</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                      </td>
                      <td>
                        <button className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
