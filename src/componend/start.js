import React from "react";
import { Link } from "react-router-dom";

const start = () => {
  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            {" "}
            <div class="card text-center bg-primary text-white mb-3">
              <div class="card-body">
                <h3>Admin</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link to="/admin" class="btn btn-outline-light btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            {" "}
            <div class="card text-center bg-warning text-white mb-3">
              <div class="card-body">
                <h3>Customer</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link to="/customer" class="btn btn-outline-light btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default start;
