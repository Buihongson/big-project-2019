import React, { Component } from "react";

import callApi from ".././../../Services/ApiServices";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: ""
    };
  }

  componentDidMount() {
    this.onGetDetails();
  }

  // Func get product details
  onGetDetails = () => {
    const productId = this.props.match.params.id;

    callApi(`api/products/${productId}`, "GET", null).then(res =>
      this.setState({ product: res.data.data })
    );
  };

  render() {
    const { product } = this.state;
    console.log(product);

    return <div>This is detail product</div>;
  }
}
