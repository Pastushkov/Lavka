import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/goods");
  // }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
