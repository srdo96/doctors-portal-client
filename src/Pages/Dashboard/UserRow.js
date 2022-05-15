import React from "react";

const UserRow = ({ user, i }) => {
  console.log(i);
  return (
    <tr key={user._id}>
      <th>{i + 1}</th>
      <td>{user.email}</td>
    </tr>
  );
};

export default UserRow;
