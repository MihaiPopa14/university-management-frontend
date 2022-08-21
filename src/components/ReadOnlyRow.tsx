import React from 'react';
import { Student } from '../types/Student';

const ReadOnlyRow = ({ st, index }: { st: Student; index: number }) => {
  return (
    <tr key={`rok-${index}`}>
      <td>{st.name}</td>
      <td>{st.surName}</td>
      <td>{st.surName}</td>
      <td>{st.surName}</td>
      {/* <td>
        <button className="edit-btn">Edit</button>
      </td>
      <td>
        <button className="delete-btn" onClick={() => handleDelete(st._id)}>
          Delete
        </button>
      </td> */}
    </tr>
  );
};

export default ReadOnlyRow;
