import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './product-list-component.css';

const Product = props => (
  <tr>
    <td>{props.products.productName}</td>
    <td>{props.products.description}</td>
    <td>{props.products.price}</td>
    <td>
      <Link to={"/edit/" + props.products._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.products._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/product/')
      .then(response => {
        this.setState({ products: response.data })
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/product/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productsList() {
    return this.state.products.map(currentproducts => {
      return <Product products={currentproducts} deleteProduct={this.deleteProduct} key={currentproducts._id} />;
    })
  }

  PDFfucntion(){
    const pdf = async() =>{
      const {data} = await axios.get(
        `http://localhost:5000/product/generatePDF`
      )
    };
    pdf();
  }

  render() {
    return (

      <div class="row">
        <div class="col-lg-12">
          <br></br>
          <h1 class="page-header">
            All Product
            <small>saving item into database </small>
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

            <h3>Logged Product </h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.productsList()}
              </tbody>
            </table>

            <div className="col-md-3">
              <button onClick={this.PDFfucntion()} className="btn btn-success btn-block">
                pdfGene
              </button>
            </div>

          </div>
        </div>
      </div>

    )
  }
}