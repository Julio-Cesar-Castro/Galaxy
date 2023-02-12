import { BrowserRouter } from "react-router-dom";

import Register from "./components/register/register";
import SignIn from "./components/signIn/signIn";

export default function App() {
  return (
    <BrowserRouter>
      <Register />;
    </BrowserRouter>
  );
}
