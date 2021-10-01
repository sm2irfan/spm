import React, { Component } from 'react';
import axios from 'axios';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productName: '',
      description: '',
      price: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/product/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          productName: response.data.productName,
          description: response.data.description,
          price: response.data.price
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeProductName(e) {
    this.setState({
      productName: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

 
  onSubmit(e) {
    e.preventDefault();

    const product = {
      productName: this.state.productName,
      description: this.state.description,
      price: this.state.price
    
    }

    console.log(product);

    axios.post('http://localhost:5000/product/update/' + this.props.match.params.id, product)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    
      <div class="row">
        <div class="col-lg-12">
          <br></br>
          <h1 class="page-header">
            Edit Product
            <small>Edit item </small>
          </h1>

          <br></br>
          <ol class="breadcrumb">
            <li>
              <i class="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
            </li>
            <li class="active">
              <i class="fa fa-file"></i> Blank Page
            </li>
          </ol>
          <div>

            <h3>Add all product</h3>

            <div>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label >Product Name: </label>
                  <input type="text"
                    required
                    className="form-control"
                    value={this.state.productName}
                    onChange={this.onChangeProductName}>

                  </input>
                </div>
                <div className="form-group">
                  <label >Description: </label>
                  <textarea rows="3" type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
                <div className="form-group">
                  <label >Price: </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <input type="submit" value="SAVE" className="btn btn-primary" />
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>

    )
  }
}

