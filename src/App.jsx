import { RouterProvider } from "react-router";
import { router } from "./Routes/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
