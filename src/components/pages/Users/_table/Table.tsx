import { useEffect } from "react";
import { controls } from "../../../../store/users";
import { useSnapshot } from "valtio";

const Table = () => {
  const {
    checkedUsers,
    setCheckedUsers,
    getAllUsers,
    allUsers: users,
  } = useSnapshot(controls);

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>
            <input
              type="checkbox"
              checked={checkedUsers.length === users.length}
              onChange={(e) =>
                setCheckedUsers(
                  users.length && checkedUsers.length === users.length
                    ? []
                    : users.map((user) => user._id)
                )
              }
            />
          </th>
          <th>ID</th>
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
                checked={checkedUsers.includes(user._id)}
                onChange={(e) =>
                  e.target.checked
                    ? setCheckedUsers([...checkedUsers, user._id])
                    : setCheckedUsers(
                        checkedUsers.filter((id) => id !== user._id)
                      )
                }
              />
            </td>
            <td>{user._id}</td>
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
