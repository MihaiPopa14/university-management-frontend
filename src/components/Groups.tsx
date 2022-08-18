import '../index.css';

import React, { MouseEvent, useEffect, useState } from 'react';
import { StateStructure, groupsCountSelector, groupsSelector } from '../features/group/selectors';
import { addGroup, getGroups, getGroupsFailed, getGroupsSuccess } from '../features/group/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Group } from '../types/Group';
import { fetchGroups } from '../features/group/apiCalls';
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

  useUpdateEffect(() => navigate('/groups'), [groupsCount]);
  useEffect(() => {
    const getData = async () => {
      dispatch(getGroups());
      try {
        const response = await fetchGroups();
        dispatch(getGroupsSuccess(response));
      } catch (error) {
        dispatch(getGroupsFailed());
      }
    };
    getData();
  }, []);

  const addGroupReq = async (event: MouseEvent) => {
    event.preventDefault();
    const newGroup: Group = {
      groupNr: parseInt(numberText),
      field: fieldText,
      year: parseInt(yearText)
    };
    dispatch(addGroup(newGroup));
  };

  const onDataInput = (e: React.ChangeEvent<HTMLInputElement>, setterMethod: Function) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    setterMethod(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    addGroupReq(e);
    // setIsInputActive(false);
  };

  const grNrCheckAndHandle = (val: string) => {
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
        <h1 className="student-section-title">Groups table</h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
          <div className={isInputActive ? 'group-input active' : 'group-input'}>
            <form className="group-form" action="">
              <label htmlFor="">Number:</label>
              <input
                type="text"
                onChange={e => {
                  setShowErrorMsg(false);
                  setShowSuccessMsg(false);
                  grNrCheckAndHandle(e.target.value);
                }}
              />
              <label htmlFor="">Field:</label>
              <input
                type="text"
                onChange={e => {
                  setShowErrorMsg(false);
                  setShowSuccessMsg(false);
                  setFieldText(e.target.value);
                }}
              />
              <label htmlFor="">Year:</label>
              <input
                type="text"
                onChange={e => {
                  setShowErrorMsg(false);
                  setShowSuccessMsg(false);
                  yearCheckAndHandle(e.target.value);
                }}
                placeholder="Year (1-4)"
              />
              <button
                className={!validForm ? 'disabled' : 'submit-btn'}
                disabled={!validForm}
                onClick={e => handleSubmit(e)}
              >
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
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
