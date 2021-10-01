import React from "react";
import "./App.css";
import Home from "./componend/home";
import UpdateProfile from "./componend/IT19029900/updateProfile";
import CustomerProfile from "./componend/IT19029900/profile";
import CustomerLogin from "./componend/IT19029900/customerLogin";
import CustomerRegister from "./componend/IT19029900/customerRegister";
import Admin from "./componend/admin/admin";
import CustomerRoute from "./componend/customerRoute";
import Start from "./componend/start";
import AdminRoute from "./componend/admin/adminRoute";

function App() {
  return (
    <React.Fragment>
      <AdminRoute />
      <CustomerRoute />
    </React.Fragment>
  );
}

export default App;
