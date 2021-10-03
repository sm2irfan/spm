import React, { Component } from 'react'
import './FormInput.css'
import CustomerNavigation from "../customerNavigation";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import axios from 'axios';


export default class CreateFeedback extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangemessage = this.onChangemessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangemessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  onSubmit(e) {
    console.log("This is for feedback checking");
    e.preventDefault();
    console.log("This is for feedback checking");
    const feedbacks = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,

    }
    axios.post('http://localhost:5000/feedback/add', feedbacks)
      .then(res => console.log(res.data));

      window.location = '/createFeedback';
  }

  render() {
    return (
      <React.Fragment>
        <CustomerNavigation />

        <div class="card text-white">
          <img width="500" height="150" class="card-img" src={detalis} alt="" />
          <div class="card-img-overlay">
            <h1 class="card-title text-center">FEEDBACK</h1>
            <h1 class="card-title text-center">Feedback Form</h1>
          </div>
        </div>

        <section className="feedback-size">
          <div class="container my-8">
            <div class="row">
              <div class="col-md-6 mx-auto">
                <div class="jumbotron jumbotron-fluid">

                  <div class="card-title">

                  </div>
                  <div class="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter name"
                          value={this.state.name}
                          onChange={this.onChangename}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter email"
                          value={this.state.email}
                          onChange={this.onChangeemail}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>


                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.message}
                          onChange={this.onChangemessage} />
                      </div>
                      <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CustomerFooter></CustomerFooter>
      </React.Fragment>
    )
  }
}