import { useRoutes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes";

function App() {
  const routing = useRoutes(routes);
  return (
    <div className="App d-flex justify-content-center w-75 mx-auto">
      {routing}
    </div>
  );
}

export default App;
