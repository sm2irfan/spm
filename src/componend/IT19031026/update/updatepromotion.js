import React, { Component } from "react";
import axios from "axios";

const initialstate = {
  name: "",
  detail: "",
  discount: 0,
  from: "",
  to: "",
};

class UpdatePromotion extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialstate;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:4000/promotion/getpromotion/615716eaf6f8c94840d79fd7`
      )
      .then((response) => {
        //console.log(this.props.match.params.id);
        this.setState({
          name: response.data.data.name,
          detail: response.data.data.detail,
          discount: response.data.data.discount,
          from: response.data.data.charge,
          to: response.data.data.to,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const promotion = {
      name: this.state.name,
      detail: this.state.detail,
      discount: this.state.discount,
      from: this.state.from,
      to: this.state.to,
      decision: this.state.decision,
    };

    console.log(promotion);

    axios
      .post(
        "http://localhost:4000/promotion/updatepromotion/615716eaf6f8c94840d79fd7",
        promotion
      )
      .then((res) => console.log(res.data));

    window.location = "/admin/admin-list-promotion";
  }

  report(e) {
    const PDF = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/promotion/pdfpromotion/615716eaf6f8c94840d79fd7`
      );
    };
    PDF();
  }

  render() {
    return (
      <div className="container">
        <h1>Promotional Products Management</h1>
        <button
          onClick={(e) => this.report(e)}
          class="btn btn-primary btn-lg btn-block"
        >
          Report
        </button>

        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Detail
            </label>
            <input
              type="text"
              className="form-control"
              id="detail"
              name="detail"
              value={this.state.detail}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              Discount (Rs)
            </label>
            <input
              type="text"
              className="form-control"
              id="discount"
              name="discount"
              value={this.state.discount}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              From
            </label>
            <input
              type="date"
              className="form-control"
              id="from"
              name="from"
              value={this.state.from}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">
              To
            </label>
            <input
              type="date"
              className="form-control"
              id="to"
              name="to"
              value={this.state.to}
              onChange={this.onChange}
            />
          </div>
          <center>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              UPDATE
            </button>
          </center>
        </form>
      </div>
    );
  }
}

export default UpdatePromotion;
