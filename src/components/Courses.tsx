import '../index.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
import {
  StateStructure,
  coursesCountSelector,
  coursesSelector
} from '../features/course/selectors';
import { ToastContainer, toast } from 'react-toastify';
import { addCourse, getCourses } from '../features/course/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Course } from '../types/Course';
import { useNavigate } from 'react-router-dom';
import { useUpdateEffect } from '../hooks/useUpdateEffect';

export const Courses = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const coursesCount: number = useSelector((state: StateStructure) => coursesCountSelector(state));
  const [isInputActive, setIsInputActive] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [creditNumber, setCreditNumber] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const courses: Array<Course> = useSelector((state: StateStructure) => coursesSelector(state));

  useUpdateEffect(() => navigate('/courses'), [coursesCount]);
  useEffect(() => {
    dispatch(getCourses());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setCourseName('');
    setCreditNumber('');
  }, [courses]);

  const addCourseReq = (event: React.MouseEvent) => {
    event.preventDefault();
    const newCourse: Course = {
      courseName: courseName,
      creditNr: parseInt(creditNumber)
    };
    dispatch(addCourse(newCourse));
    toast.success('Course added!');
  };

  const onDataInput = (e: React.ChangeEvent<HTMLInputElement>, setterMethod: Function) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    setterMethod(e.target.value);
  };

  const creditNrCheckAndHandle = (val: string) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    const num = Number(val);
    if (val.length === 0) {
      setCreditNumber('');
    }
    if (isNaN(num)) {
      return;
    }
    if (num < 1 || num > 10) {
      return;
    }
    setCreditNumber(num.toString());
  };
  const validForm: boolean = courseName.length !== 0 && creditNumber.length !== 0;

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title">Courses</h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
          <div className={isInputActive ? 'group-input active' : 'group-input'}>
            <form className="group-form" action="">
              <label htmlFor="">Course name:</label>
              <input
                type="text"
                onChange={e => {
                  onDataInput(e, setCourseName);
                }}
              />
              <label htmlFor="">Credits:</label>
              <input
                type="text"
                value={creditNumber}
                onChange={e => {
                  creditNrCheckAndHandle(e.target.value);
                }}
              />
              {showSuccessMsg && <p>Student was successfully added!!</p>}
              {showErrorMsg && <p>Error occurred while adding student! Please try again later!</p>}
              <button className={!validForm ? 'disabled' : 'submit-btn'} onClick={addCourseReq}>
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
        <div className="sticky-header-table">
          <table className="group-table">
            <thead>
              <tr>
                <th>Course name</th>
                <th>Credit number</th>
                <th>Edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {courses.length > 0 &&
                courses.map((gr: Course, index: number) => {
                  return (
                    <tr key={`rok-${index}`}>
                      <td>{gr.courseName}</td>
                      <td>{gr.creditNr}</td>
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
      <ToastContainer />
    </div>
  );
};
