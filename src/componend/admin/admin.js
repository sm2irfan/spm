import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import CustomerNavigation from "../customerNavigation";
import AdminNavigation from "./adminNavigation";
import Start from "../start";
import Home from "../home";
import AdminPayment from "../IT19029900/admin/adminPayment";

import CreatePro from '../IT19031026/create/createpromotion';
import ListPro from '../IT19031026/list/listspromotion';
import UpdatePro from '../IT19031026/update/updatepromotion';
import Adminpro from '../IT19031026/admin/admin';


import CreateProducts from "../IT19018256/create-product.component";
import ProductList from '../IT19018256/product-list-component';
import EditProduct from '../IT19018256/edit.product.component';
import FeedbacksList from "../IT17016476/adminFeedbackList";

const admin = () => {
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "100%",
          }}
        >
          <AdminNavigation />
          <div id="accordion">
            <div class="row">
              <div class="col-md-3">
                <div id="accordion">
                  <div class="card bg-dark">
                    <div class="card-header">
                      <h5>
                        <a
                          href="#collapse1"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Product Handleing
                        </a>
                      </h5>
                    </div>

                    <div id="collapse1" class="collapse">
                      <div class="card-body">
                        <a href="/admin/createProduct" class="dropdown-item">Add Product</a>
                        <a href="/admin/allProduct" class="dropdown-item">All Product</a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="card bg-dark">
                    <div class="card-header">
                      <h5>
                        <a
                          href="#collapse2"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Payment
                        </a>
                      </h5>
                    </div>

                    <div id="collapse2" class="collapse">
                      <div class="card-body">
                        <Link to="/admin/payment" class="dropdown-item">
                          Payment
                        </Link>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse3"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Delivery
                        </a>
                      </h5>
                    </div>

                    <div id="collapse3" class="collapse">
                      <div class="card-body">
                        <a href="#" class="dropdown-item">
                          Link 1
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse4"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Feedback
                        </a>
                      </h5>
                    </div>

                    <div id="collapse4" class="collapse">
                      <div class="card-body">
                        <a href="/admin/allFeedback" class="dropdown-item">
                          Manage Feedback
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse5"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Promotions
                        </a>
                      </h5>
                    </div>

                    <div id="collapse5" class="collapse">
                      <div class="card-body">
                        <a href="/admin/admin-create-promotion" class="dropdown-item">
                          Add
                        </a>
                        <a href="/admin/admin-list-promotion" class="dropdown-item">
                          List
                        </a>
                        <a href="/admin/admin-reject-promotion" class="dropdown-item">
                          Desicion
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse6"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Collapse One
                        </a>
                      </h5>
                    </div>

                    <div id="collapse6" class="collapse">
                      <div class="card-body">
                        <a href="#" class="dropdown-item">
                          Link 1
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-9"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "1000px",
                }}
              >
                <Route path="/admin/payment" exact>
                  <AdminPayment />
                </Route>


                <Route path="/admin/admin-create-promotion" exact>
                  <CreatePro />
                </Route>
                <Route path="/admin/admin-list-promotion" exact>
                  <ListPro />
                </Route>
                <Route path="/admin/admin-update-promotion/:id" exact>
                  <UpdatePro />
                </Route>
                <Route path="/admin/admin-reject-promotion" exact>
                  <Adminpro />
                </Route>

                <Route path="/admin/createProduct" exact>
                <CreateProducts/>
                </Route>
                <Route path="/admin/allProduct" exact component={ProductList} />
                <Route path="/admin/edit/:id" component={EditProduct} />


                <Route path="/admin/allFeedback" exact component={FeedbacksList} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default admin;
