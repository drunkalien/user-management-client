import { useState } from "react";
import { User } from "types";

type Props = {
  users: User[];
};

const Table = ({ users }: Props) => {
  const [checkedUsers, setCheckedUsers] = useState<number[]>([]);

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>
            <input
              type="checkbox"
              checked={checkedUsers.length === users.length}
              onChange={(e) =>
                setCheckedUsers((prevUsers) =>
                  prevUsers.length === users.length
                    ? []
                    : users.map((user) => user.id)
                )
              }
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={i}>
            <td>
              <input
                type="checkbox"
                checked={checkedUsers.includes(user.id)}
                onChange={(e) =>
                  e.target.checked
                    ? setCheckedUsers((users) => [...users, user.id])
                    : setCheckedUsers((users) =>
                        users.filter((id) => id !== user.id)
                      )
                }
              />
            </td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td
              className={`${
                user.isActive ? "bg-success" : "bg-danger"
              } text-white`}
            >
              {user.isActive ? "Active" : "Blocked"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
