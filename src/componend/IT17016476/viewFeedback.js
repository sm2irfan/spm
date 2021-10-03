import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerNavigation from "../customerNavigation";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import axios from 'axios';

const Feedback = props => (

    //     <div >

    //     <div class="card-header" >Header</div>
    //   <div class="card-body text-primary" style={{"height" : "20%"}}>
    //     <h5 class="card-title">Primary card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    //   </div>
    
    <div className='container col-5 container-sm'>
        <div class="card" >
            <div class="card-header"> <h1>
            {props.feedback.name}</h1>
            </div>
            <div class="card-body">
                <h6> <p class="card-text"> {props.feedback.email}</p> </h6>
               <h5> <p class="card-text">{props.feedback.message}</p> </h5>
                <Link to={"/editFeedback/" + props.feedback._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteFeedback(props.feedback._id) }}>Delete</a>
            </div>
        </div>
    </div>
    
    // <div class="jumbotron jumbotron-fluid">
    //     <div class="container">
    //         <h1 class="display-4">{props.feedback.name}</h1>
    //         <p class="lead">{props.feedback.message}</p>
    //     </div>
    //     <div>
    //         <Link to={"/edit/" + props.feedback._id}>edit</Link> | <a href="#" onClick={() => { props.deleteFeedback(props.feedback._id) }}>delete</a>
    //     </div>
    // </div>

)

export default class FeedbacksList extends Component {
    constructor(props) {
        super(props);

        this.deleteFeedback = this.deleteFeedback.bind(this)

        this.state = { feedbacks: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/feedback/')
            .then(response => {
                this.setState({ feedbacks: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteFeedback(id) {
        axios.delete('http://localhost:5000/feedback/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            feedbacks: this.state.feedbacks.filter(el => el._id !== id)
        })
    }

    feedbackList() {
        return this.state.feedbacks.map(currentfeedback => {
            return <Feedback feedback={currentfeedback} deleteFeedback={this.deleteFeedback} key={currentfeedback._id} />;
        })
    }

    render() {
        return (

            <React.Fragment>
                <CustomerNavigation />


                <div class="card text-white">
                    <img width="500" height="150" class="card-img" src={detalis} alt="" />
                    <div class="card-img-overlay">
                        <h1 class="card-title text-center">FEEDBACK</h1>
                        <h1 class="card-title text-center">Customer's Feedback - Recent</h1>
                    </div>
                </div>

                <div className="comments_list">
                    {
                        //comments.map(comment => (
                        this.feedbackList()
                        //))
                    }
                </div>
                <CustomerFooter></CustomerFooter>

            </React.Fragment>
        )
    }
}