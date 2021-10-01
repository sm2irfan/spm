import React, { useState, useEffect } from "react";
import CustomerNavigation from "../customerNavigation";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import aveter from "../../avatar.png";

const CustomerPayment = () => {
  const [profile, setprofile] = useState({});
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");

  const history = useHistory();

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/customers/${localStorage.getItem(
          "CustomerID"
        )}`
      );
      setprofile(data);
      console.log(data);
    };
    sendRequest();
  }, []);

  function submitHandler(event) {
    event.preventDefault();
    add();
  }

  async function add() {
    axios
      .post("http://localhost:5000/api/payments/post", {
        firstname: profile.firstname,
        lastname: profile.lastname,
        address: address || profile.address,
        city: city || profile.city,
        phone: profile.phone,
        email: profile.email,
        totalPrice: 500,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("ok");
        } else {
          alert("Payment failed please try again");
        }
      });
  }

  return (
    <React.Fragment>
      <CustomerNavigation />

      <div class="card text-white">
        <img width="500" height="150" class="card-img" src={detalis} alt="" />
        <div class="card-img-overlay">
          <h1 class="card-title text-center">PAYMENT</h1>
        </div>
      </div>

      <div className="my-5">
        <section id="profile">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="card">
                  <div class="card-header">
                    <h4>Payment Gateway</h4>
                  </div>
                  <div class="card-body">
                    <form onSubmit={submitHandler}>
                      <div class="form-row">
                        <div class="col">
                          <label for="email">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First name"
                            value={profile.firstname}
                            readOnly
                          />
                        </div>
                        <div class="col">
                          <label for="email">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                            value={profile.lastname}
                            readOnly
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="Addresss">Addresss</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Address"
                          value={profile.address}
                          onChange={(e) => {
                            profile.address = setaddress(e.target.value);
                          }}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="City"
                          value={profile.city}
                          onChange={(e) => {
                            profile.city = setcity(e.target.value);
                          }}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="Credit">Credit Card No</label>
                        <input type="number" class="form-control" required />
                      </div>
                      <div class="form-group">
                        <label for="CVS">CVS Number</label>
                        <input type="number" class="form-control" required />
                      </div>
                      <button class="btn btn-primary btn-block" type="submit">
                        Pay
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <h3>Your Cart Items</h3>
                <table class="table table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Apple</td>
                      <td>2</td>
                      <td>100 $</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Apple</td>
                      <td>2</td>
                      <td>100 $</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Apple</td>
                      <td>2</td>
                      <td>100 $</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Apple</td>
                      <td>2</td>
                      <td>100 $</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Apple</td>
                      <td>2</td>
                      <td>100 $</td>
                    </tr>
                  </tbody>
                </table>
                <h3>Total amount : 500$</h3>
                <br></br>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CustomerFooter />
    </React.Fragment>
  );
};

export default CustomerPayment;
