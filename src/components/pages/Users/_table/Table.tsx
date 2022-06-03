import { useState } from "react";
import { User } from "types";

type Props = {
  users: User[];
};

const Table = ({ users }: Props) => {
  const [checked, setChecked] = useState(false);
  // const [selectedUsers, setSelectedUsers] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState([]);

  const newUsers = users.map((u) => ({ ...u, isSelected: false }));

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>
            <input
              checked={checked}
              type="checkbox"
              onChange={() => setChecked(!checked)}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {newUsers.map((user, i) => (
          <tr key={i}>
            <td>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => {
                  user.isSelected = !user.isSelected;
                }}
              />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isActive ? "Active" : "Blocked"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
