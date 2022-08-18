import '../index.css';

import React, { useEffect, useState } from 'react';
import { StateStructure, groupsCountSelector, groupsSelector } from '../features/group/selectors';
import { getGroups, getGroupsFailed, getGroupsSuccess } from '../features/group/actions';
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

  return (
    <div className="container">
      <div className="table-container">
        <h1 className="student-section-title">Groups table</h1>
        <div className={isInputActive ? 'student-controls large' : 'student-controls small'}>
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
          <tbody>
            {groups.length > 0 &&
              groups.map((gr: Group, index: number) => {
                return (
                  <tr key={`rok-${index}`}>
                    <td>{gr.groupNr}</td>
                    <td>{gr.field}</td>
                    <td>{gr.year}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
