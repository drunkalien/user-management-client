import { Link } from "react-router-dom";

const Home = () => {
  let token = window.localStorage.getItem("token");

  return (
    <div className="w-50 h-100 d-flex justify-content-center align-items-center">
      {token ? (
        <Link to="/users">
          <button className="btn btn-primary">Dashboard</button>
        </Link>
      ) : (
        <div className="w-25 d-flex justify-content-between">
          <Link to="/signup">
            <button className="btn btn-primary">Signup</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
