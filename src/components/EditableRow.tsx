import React from 'react';
import { Student } from '../types/Student';

const EditableRow = ({
  editFormData,
  handleEditFormChange
}: {
  editFormData: Student;
  handleEditFormChange: Function;
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Name"
          onChange={() => handleEditFormChange()}
          value={editFormData.name}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Surname"
          onChange={() => handleEditFormChange()}
          value={editFormData.surName}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Group"
          onChange={() => handleEditFormChange()}
          value={editFormData.surName}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Year"
          onChange={() => handleEditFormChange()}
          value={editFormData.surName}
        />
      </td>
      <td>
        <button className="edit-btn">Save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
