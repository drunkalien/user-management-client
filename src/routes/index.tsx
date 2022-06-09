import { Users, Login, Signup, Home } from "../components";

const homeRoutes = {
  path: "/",
  element: <Home />,
};

const signupRoutes = {
  path: "/signup",
  element: <Signup />,
};

const loginRoutes = {
  path: "/login",
  element: <Login />,
};

const userRoutes = {
  path: "/users",
  element: <Users />,
};

export const routes = [homeRoutes, signupRoutes, loginRoutes, userRoutes];
