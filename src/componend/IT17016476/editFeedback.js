import React, { Component } from 'react'
import './FormInput.css'
import CustomerNavigation from "../customerNavigation";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import axios from 'axios';


export default class EditFeedback extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  // componentWillMount() {
  //   this.getMeetupDetails();
  // }

  componentDidMount() {
    axios.get('http://localhost:5000/feedback/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          message: response.data.message

        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }



  // getMeetupDetails() {
  //   let addId = this.props.match.params.id;
  //   axios.get(`http://localhost:5000/feedback/add/${addId}`)
  //     .then(response => {
  //       this.setState({
  //         id: response.data.id,
  //         name: response.data.name,
  //         email: response.data.email,
  //         message: response.data.message
  //       }, () => {
  //         console.log(this.state);
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // editMeetup(newMeetup) {
  //   axios.request({
  //     method: 'put',
  //     url: `http://localhost:5000/feedback/add/${this.state.id}`,
  //     data: newadd
  //   }).then(response => {
  //     this.props.history.push('/');
  //   }).catch(err => console.log(err));
  // }



  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const feedback = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message

    }

    console.log(feedback);

    axios.post('http://localhost:5000/feedback/update/' + this.props.match.params.id, feedback)
      .then(res => console.log(res.data));

    window.location = '/viewFeedback';
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
                    {/* <h4>Feedback Form</h4> */}
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
                          onChange={this.onChangeName}
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
                          onChange={this.onChangeEmail}
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>


                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.message}
                          onChange={this.onChangeMessage} />
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