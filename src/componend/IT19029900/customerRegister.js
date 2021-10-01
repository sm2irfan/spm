import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import CustomerNavigation from "../customerNavigation";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import axios from "axios";

const CustomerRegister = () => {
  const First_name = useRef("");
  const Last_name = useRef("");
  const Addresss = useRef("");
  const City = useRef("");
  const Phone = useRef("");
  const Email = useRef("");
  const Password = useRef("");

  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    add();
  }

  async function add() {
    axios
      .post("http://localhost:5000/api/customers/signup", {
        firstname: First_name.current.value,
        lastname: Last_name.current.value,
        address: Addresss.current.value,
        city: City.current.value,
        phone: Phone.current.value,
        email: Email.current.value,
        password: Password.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("CustomerIsLoggedIn", true);
          localStorage.setItem("CustomerID", res.data._id);
          localStorage.setItem("CustomerEmail", res.data.email);
          history.push(`/customerProfile`);
          window.location.reload();
        } else {
          alert("Registation failed please try again");
        }
      });
  }

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <React.Fragment>
      <CustomerNavigation />

      <div class="card text-white">
        <img width="500" height="150" class="card-img" src={detalis} alt="" />
        <div class="card-img-overlay">
          <h1 class="card-title text-center">REGISTER</h1>
        </div>
      </div>

      <div className="my-3">
        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row"></div>
          </div>
        </section>

        <section id="profile">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="card">
                  <div class="card-header">
                    <h4>Register here..</h4>
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
                            ref={First_name}
                            required
                          />
                        </div>
                        <div class="col">
                          <label for="email">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                            ref={Last_name}
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="Addresss">Addresss</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Addresss.."
                          ref={Addresss}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="city">City</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Addresss.."
                          ref={City}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          ref={Phone}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          ref={Email}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          ref={Password}
                          id="myInput"
                          required
                        />
                      </div>
                      <div class="form-check">
                        <label class="form-check-label mr-2">
                          <input
                            type="checkbox"
                            onClick={myFunction}
                            class="form-check-input"
                          />{" "}
                          Show Password
                        </label>
                      </div>

                      <button class="btn btn-primary btn-block" type="submit">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CustomerFooter />
    </React.Fragment>
  );
};

export default CustomerRegister;
