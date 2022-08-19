import '../index.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
import {
  StateStructure,
  professorsCountSelector,
  professorsSelector
} from '../features/professor/selectors';
import { ToastContainer, toast } from 'react-toastify';
import { addProfessor, getProfessors } from '../features/professor/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Professor } from '../types/Professor';
import { useNavigate } from 'react-router-dom';
import { useUpdateEffect } from '../hooks/useUpdateEffect';

export const Professors = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const professorsCount: number = useSelector((state: StateStructure) =>
    professorsCountSelector(state)
  );
  const [isInputActive, setIsInputActive] = useState(false);
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [title, setTitle] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const professors: Array<Professor> = useSelector((state: StateStructure) =>
    professorsSelector(state)
  );

  useUpdateEffect(() => navigate('/professors'), [professorsCount]);
  useEffect(() => {
    dispatch(getProfessors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   setName('');
  //   setSurName('');
  //   setTitle('');
  // }, [professors]);

  const handleClick = () => {
    setName('');
    setSurName('');
    setTitle('');
  }; //Does not work to be fixed

  const addProfessorReq = (e: React.MouseEvent) => {
    e.preventDefault();
    const newProfessor: Professor = {
      name: name,
      surName: surName,
      title: title
    };
    dispatch(addProfessor(newProfessor));
    toast.success('Professor added!');
  };

  const handleSubmit = (e: React.MouseEvent) => {
    handleClick();
    addProfessorReq(e);
  };

  const onDataInput = (e: React.ChangeEvent<HTMLInputElement>, setterMethod: Function) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    setterMethod(e.target.value);
  };

  const validForm: boolean = name.length !== 0 && surName.length !== 0 && title.length !== 0;

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title">Professors</h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
          <div className={isInputActive ? 'group-input active' : 'group-input'}>
            <form className="group-form" action="">
              <label htmlFor="">Name:</label>
              <input type="text" onChange={e => onDataInput(e, setName)} />
              <label htmlFor="">Surname:</label>
              <input type="text" onChange={e => onDataInput(e, setSurName)} />
              <label htmlFor="">Title:</label>
              <input type="text" onChange={e => onDataInput(e, setTitle)} />
              {showSuccessMsg && <p>Student was successfully added!!</p>}
              {showErrorMsg && <p>Error occurred while adding student! Please try again later!</p>}
              <button className={!validForm ? 'disabled' : 'submit-btn'} onClick={handleSubmit}>
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
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {professors.length > 0 &&
              professors.map((gr: Professor, index: number) => {
                return (
                  <tr key={`rok-${index}`}>
                    <td>{gr.name}</td>
                    <td>{gr.surName}</td>
                    <td>{gr.title}</td>
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
      <ToastContainer />
    </div>
  );
};
