import React from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import UpdateProfile from "./IT19029900/updateProfile";
import CustomerProfile from "./IT19029900/profile";
import CustomerLogin from "./IT19029900/customerLogin";
import CustomerRegister from "./IT19029900/customerRegister";
import CustomerPayment from "./IT19029900/customerPayment";
import CutomerPaymentHistory from "./IT19029900/cutomerPaymentHistory";

const customerRoute = () => {
  return (
    <React.Fragment>
      <Route path="/customer" exact>
        <Home />
      </Route>

      <Route path="/customerLogin" exact>
        <CustomerLogin />
      </Route>

      <Route path="/customerProfile" exact>
        <CustomerProfile />
      </Route>

      <Route path="/customerRegister" exact>
        <CustomerRegister />
      </Route>

      <Route path="/updateProfile" exact>
        <UpdateProfile />
      </Route>

      <Route path="/payment" exact>
        <CustomerPayment />
      </Route>

      <Route path="/paymentHistory" exact>
        <CutomerPaymentHistory />
      </Route>
    </React.Fragment>
  );
};

export default customerRoute;
