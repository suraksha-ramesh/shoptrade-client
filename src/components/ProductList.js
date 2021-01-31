import React, { Component } from "react";
import axios from "axios";
import getProducts from "../utils/getProducts";
import "bootstrap/dist/css/bootstrap.css";
import ProductRow from "./ProductRow";

export const items = [];

// localStorage.setItem("filterValue", "All Products");

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quads: [],
    };
  }

  componentDidMount() {
    this.updateComponent();
  }

  componentDidUpdate(prevProps) {
    this.updateComponent();
  }

  updateComponent() {
    axios
      .get(
        "https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json"
      )
      .then((res) => {
        let products1 = getProducts(res);
        // this.setState({ filter: localStorage.getItem("filterValue") });
        if (this.props.filter === "All Products") {
          let i, j;
          let quadArray = [];
          for (i = 0, j = products1.length; i < j; i += 4) {
            quadArray.push(products1.slice(i, i + 4));
          }
          // console.log(quadArray);
          this.setState({
            quads: [...quadArray],
          });
        } else {
          let filteredProducts = [];
          products1.forEach((product) => {
            if (product.tag === this.props.filter) {
              filteredProducts.push(product);
            }
          });
          let i, j;
          let quadArray = [];
          for (i = 0, j = filteredProducts.length; i < j; i += 4) {
            quadArray.push(filteredProducts.slice(i, i + 4));
          }
          // console.log(quadArray);
          this.setState({
            quads: [...quadArray],
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    let rowMarkUp = this.state.quads ? (
      <div>
        {this.state.quads.map((quad) => {
          return <ProductRow rowItems={quad} />;
        })}
      </div>
    ) : (
      <p>Loading.. </p>
    );

    return <div>{rowMarkUp}</div>;
  }
}

export default ProductList;
