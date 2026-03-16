import { RouterProvider } from "react-router";
import { router } from "./Routes/router";
import ApplyPopup from "./components/home/ApplyPopup";

const App = () => {
  return <RouterProvider router={router} />;
};
<>
<ApplyPopup />
</>
export default App;
