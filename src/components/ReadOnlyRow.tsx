import React from 'react';
import { Student } from '../types/Student';

const ReadOnlyRow = ({
  st,
  index,
  handleDelete,
  handleEdit,
  handleEditClick
}: {
  st: Student;
  index: number;
  handleDelete: Function;
  handleEdit: Function;
  handleEditClick: Function;
}) => {
  return (
    <tr key={`rok-${index}`} onClick={() => handleEditClick()}>
      <td>{st.name}</td>
      <td>{st.surName}</td>
      <td>{st.surName}</td>
      <td>{st.surName}</td>
      <td>
        <button className="edit-btn" onClick={() => handleEdit()}>
          Edit
        </button>
      </td>
      <td>
        <button className="delete-btn" onClick={() => handleDelete(st._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
