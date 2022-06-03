import Table from "./_table";
import { User } from "types";

const users: User[] = [
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    isActive: true,
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    isActive: true,
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    isActive: true,
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    isActive: true,
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    isActive: true,
  },
];

const Users = () => {
  return (
    <div className="p-5">
      <Table users={users} />
    </div>
  );
};

export default Users;
