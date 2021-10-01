import React, { useRef, useState } from "react";
import CustomerNavigation from "../customerNavigation";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const CustomerLogin = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [login, setlogin] = useState();

  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    Login();
  }

  function Login() {
    axios
      .post("http://localhost:5000/api/customers/login/", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          setlogin(res);
          localStorage.setItem("CustomerIsLoggedIn", true);
          localStorage.setItem("CustomerID", res.data._id);
          localStorage.setItem("CustomerEmail", res.data.email);

          history.push(`/customerProfile`);
          window.location.reload();
        } else {
          alert("Login failed please try again");
        }

        setlogin(res);
      });
  }

  return (
    <React.Fragment>
      <CustomerNavigation />

      <div class="card text-white">
        <img width="500" height="150" class="card-img" src={detalis} alt="" />
        <div class="card-img-overlay">
          <h1 class="card-title text-center">LOGIN</h1>
        </div>
      </div>

      <section>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="card">
                <div class="card-header">
                  <h4>Customer Login</h4>
                </div>
                <div class="card-body">
                  <form onSubmit={submitHandler}>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter name"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter password"
                        ref={passwordRef}
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      value="Login"
                      class="btn btn-primary btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerFooter></CustomerFooter>
    </React.Fragment>
  );
};

export default CustomerLogin;
