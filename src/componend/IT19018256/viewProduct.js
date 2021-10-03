import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerNavigation from "../customerNavigation";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import axios from 'axios';
import { useCart } from 'react-use-cart';


const Product = props => {

   let x = 0;

    function createCard (id){
        localStorage.setItem(`Product ${id}`, id)
    }

    //     <div >

    //     <div class="card-header" >Header</div>
    //   <div class="card-body text-primary" style={{"height" : "20%"}}>
    //     <h5 class="card-title">Primary card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    //   </div>
    return(
    <div class="container">
    <div class="row mt-3">
      <div class="col  mt-3 mb-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{props.product.productName}</h4>          
            <h6 class="card-subtitle text-muted">{props.product.description}</h6>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Illo, quas.
            </p>
            <h4 class="card-title">{props.product.price} Rs</h4> 
            <button class="btn btn-outline-primary mr-2" onClick ={createCard(props.product._id)} >
                  Read More
            </button>
            <a class="btn btn-outline-primary mr-2" href="#">
                  ADD TO CARD
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
   

    // <div className='container col-5 container-sm'>
    //     <div class="card" >
    //         <div class="card-header"> <h1>
    //         {props.feedback.name}</h1>
    //         </div>
    //         <div class="card-body">
    //             <h6> <p class="card-text"> {props.feedback.email}</p> </h6>
    //            <h5> <p class="card-text">{props.feedback.message}</p> </h5>
    //             <Link to={"/editFeedback/" + props.feedback._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteFeedback(props.feedback._id) }}>Delete</a>
    //         </div>
    //     </div>
    // </div>
    
    // <div class="jumbotron jumbotron-fluid">
    //     <div class="container">
    //         <h1 class="display-4">{props.feedback.name}</h1>
    //         <p class="lead">{props.feedback.message}</p>
    //     </div>
    //     <div>
    //         <Link to={"/edit/" + props.feedback._id}>edit</Link> | <a href="#" onClick={() => { props.deleteFeedback(props.feedback._id) }}>delete</a>
    //     </div>
    // </div>
    );
}

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this)

        this.state = { product: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/product/')
            .then(response => {
                this.setState({ product: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteProduct(id) {
        axios.delete('http://localhost:5000/product/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            product: this.state.product.filter(el => el._id !== id)
        })
    }

    productList() {
        return this.state.product.map(currentProduct => {
            return <Product product={currentProduct}/>;
        })
    }

    render() {
        return (

            <React.Fragment>

                <div className="comments_list">
                    {
                        //comments.map(comment => (
                        this.productList()
                        //))
                    }
                </div>

            </React.Fragment>
        )
    }
}