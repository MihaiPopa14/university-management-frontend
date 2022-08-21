import '../index.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
import { StateStructure, groupsCountSelector, groupsSelector } from '../features/group/selectors';
import { ToastContainer, toast } from 'react-toastify';
import { addGroup, deleteGroup, getGroups } from '../features/group/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Group } from '../types/Group';
import { useNavigate } from 'react-router-dom';
import { useUpdateEffect } from '../hooks/useUpdateEffect';

export const Groups = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const groupsCount: number = useSelector((state: StateStructure) => groupsCountSelector(state));

  const [isInputActive, setIsInputActive] = useState(false);
  const [numberText, setNumberText] = useState('');
  const [fieldText, setFieldText] = useState('');
  const [yearText, setYearText] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const groups: Array<Group> = useSelector((state: StateStructure) => groupsSelector(state));

  const success = () => {
    toast.success('Operation successful!');
  };

  useUpdateEffect(() => navigate('/groups'), [groupsCount]);
  useEffect(() => {
    dispatch(getGroups());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNumberText('');
    setFieldText('');
    setYearText('');
  }, [groups]);

  const addGroupReq = (event: React.MouseEvent) => {
    event.preventDefault();
    const newGroup: Group = {
      groupNr: parseInt(numberText),
      field: fieldText,
      year: parseInt(yearText)
    };
    dispatch(addGroup(newGroup));
    toast.success('Group added successfully');
  };

  const handleDelete = (id: string | undefined) => {
    if (window.confirm('Delete group?')) dispatch(deleteGroup(id));
    toast.success('Group deleted');
  };

  const onDataInput = (e: React.ChangeEvent<HTMLInputElement>, setterMethod: Function) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    setterMethod(e.target.value);
  };

  // const handleSubmit = (e: React.MouseEvent) => {
  //   addGroupReq(e);
  //   // setIsInputActive(false);
  // };

  const grNrCheckAndHandle = (val: string) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    const num = Number(val);
    if (val.length === 0) {
      setNumberText('');
    }
    if (isNaN(num)) {
      return;
    }
    if (num < 1) {
      return;
    }
    setNumberText(num.toString());
  };

  const yearCheckAndHandle = (val: string) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    const num = Number(val);
    if (val.length === 0) {
      setYearText('');
    }
    if (isNaN(num)) {
      return;
    }
    if (num < 1 || num > 4) {
      return;
    }
    setYearText(num.toString());
  };

  const validForm: boolean =
    numberText.length !== 0 && fieldText.length !== 0 && yearText.length !== 0;

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title" onClick={success}>
          Groups table
        </h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
          <div className={isInputActive ? 'group-input active' : 'group-input'}>
            <form className="group-form" action="">
              <label htmlFor="">Number:</label>
              <input
                type="text"
                value={numberText}
                onChange={e => {
                  grNrCheckAndHandle(e.target.value);
                }}
              />
              <label htmlFor="">Field:</label>
              <input
                type="text"
                onChange={e => {
                  onDataInput(e, setFieldText);
                }}
              />
              <label htmlFor="">Year:</label>
              <input
                type="text"
                value={yearText}
                onChange={e => {
                  yearCheckAndHandle(e.target.value);
                }}
                placeholder="Year (1-4)"
              />
              {showSuccessMsg && <p>Student was successfully added!!</p>}
              {showErrorMsg && <p>Error occurred while adding student! Please try again later!</p>}
              <button className={!validForm ? 'disabled' : 'submit-btn'} onClick={addGroupReq}>
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
        <div className="sticky-header-table">
          <table className="group-table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Field</th>
                <th>Year</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {groups.length > 0 &&
                groups.map((gr: Group, index: number) => {
                  return (
                    <tr key={`rok-${index}`}>
                      <td>{gr.groupNr}</td>
                      <td>{gr.field}</td>
                      <td>{gr.year}</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                      </td>
                      <td>
                        <button className="delete-btn" onClick={() => handleDelete(gr._id)}>
                          Delete
                        </button>
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
