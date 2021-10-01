import React, { useState, useEffect, useRef } from "react";
import CustomerNavigation from "../customerNavigation";
import detalis from "../../details.jpg";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const CutomerPaymentHistory = () => {
  const [pay, setpay] = useState([]);
  let x = 0;

  useEffect(() => {
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/api/payments/email", {
          email: localStorage.getItem("CustomerEmail"),
        })
        .then((res) => {
          setpay(res.data.paymentemail);
        });
    };
    sendRequest();
  }, []);

  console.log(pay);

  return (
    <React.Fragment>
      <CustomerNavigation />
      <div class="card text-white">
        <img width="500" height="150" class="card-img" src={detalis} alt="" />
        <div class="card-img-overlay">
          <h1 class="card-title text-center">PAYMENT HISTORY</h1>
        </div>
      </div>

      <section id="actions" class="py-4 mb-4 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <Link to="/customerProfile" class="btn btn-success btn-block">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Payment ID</th>
              <th>Addreass</th>
              <th>TotalPrice</th>
              <th>State</th>
            </tr>
          </thead>
          {pay.map((pay) => (
            <tbody>
              <tr>
                <th>{++x}</th>
                <th>{pay._id}</th>
                <td>{pay.address}</td>
                <td>{pay.totalPrice}</td>
                <td>{pay.state}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default CutomerPaymentHistory;
