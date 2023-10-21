import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
