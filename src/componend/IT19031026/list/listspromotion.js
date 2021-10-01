import React, { Component } from "react";
import axios from "axios";

const initialstate = {
  products: [],
};

class ListPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = initialstate;
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/promotion/getallpromotion")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ products: response.data.data });
      });
  }

  navigatedelete(e, promotionId) {
    axios
      .delete("http://localhost:4000/promotion/deletepromotion/" + promotionId)
      .then((response) => {
        console.log(response.data.data);
        window.location = "/admin/admin-list-promotion";
      });
  }

  navigateupdate(e, promotionId) {
    window.location = "/admin/admin-update-promotion/" + promotionId;
  }

  render() {
    return (
      <div className="container">
        <br />
        <h1>
          <pre class="tab">
            Promotional Products Management{" "}
            <a href="create-promotion">
              <button class="btn btn-success btn-lg float-right" type="submit">
                New Product
              </button>
            </a>
          </pre>
        </h1>

        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Detail</th>
              <th>Discount (Rs)</th>
              <th>From</th>
              <th>To</th>
              <th>Actions</th>
            </tr>
            <br />
          </thead>
          <tbody>
            {this.state.products.length > 0 &&
              this.state.products.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.photo} height="130" width="130" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.detail}</td>
                  <td>{item.discount}</td>
                  <td>{item.to}</td>
                  <td>{item.from}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => this.navigateupdate(e, item._id)}
                    >
                      Update
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-primary"
                      onClick={(e) => this.navigatedelete(e, item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListPromotion;
