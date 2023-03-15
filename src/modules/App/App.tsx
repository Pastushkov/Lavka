import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/shop')
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
