import Table from "./_table";
import Controls from "./_controls";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="p-5">
      <Controls />
      <Table />
      <Link to="/">
        <button className="btn btn-primary">&#8592; Go back</button>
      </Link>
    </div>
  );
};

export default Users;
