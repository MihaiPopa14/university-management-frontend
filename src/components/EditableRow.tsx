import React from 'react';

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input type="text" placeholder="Name" />
      </td>
      <td>
        <input type="text" placeholder="Surname" />
      </td>
      <td>
        <input type="text" placeholder="Group" />
      </td>
      <td>
        <input type="text" placeholder="Year" />
      </td>
    </tr>
  );
};

export default EditableRow;
