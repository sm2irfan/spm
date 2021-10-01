import React from "react";
import logo from "../logo.JPG";
import { Link } from "react-router-dom";

const customerNavigation = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-sm navbar-dark bg-success mb-3">
        <div class="container">
          <Link class="navbar-brand" to="/customer">
            <img class="card-img w-75" src={logo} alt="" />
          </Link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/customer">
                Home
              </Link>
            </li>
            <li class="nav-item">
              {!localStorage.getItem("CustomerIsLoggedIn") && (
                <Link class="nav-link" to="/customerLogin">
                  Login
                </Link>
              )}
            </li>
            <li class="nav-item">
              {!localStorage.getItem("CustomerIsLoggedIn") && (
                <Link class="nav-link" to="/customerRegister">
                  Register
                </Link>
              )}
            </li>
            <li class="nav-item">
              {localStorage.getItem("CustomerIsLoggedIn") && (
                <Link class="nav-link" to="/listcustomer">
                  Promotions
                </Link>
              )}
            </li>
            <li class="nav-item">
              {localStorage.getItem("CustomerIsLoggedIn") && (
                <Link class="nav-link" to="/customerProfile">
                  Profile
                </Link>
              )}
            </li>
            {localStorage.getItem("CustomerIsLoggedIn") && (
              <li class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Feedback
                </a>
                <div class="dropdown-menu">
                  <Link to="/createFeedback" class="dropdown-item">
                    Add Feedback
                  </Link>
                  <Link to="/viewFeedback" class="dropdown-item">
                    View Feedback
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default customerNavigation;
