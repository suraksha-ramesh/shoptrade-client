import React, { Component } from "react";
import axios from "axios";
import getProducts from "../utils/getProducts";
import ProductRow from "./ProductRow";
import style from "../css/productList.module.css";
import "bootstrap/dist/css/bootstrap.css";

// export const items = [];

// localStorage.setItem("filterValue", "All Products");

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quintet: [],
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
          this.props.setProductCount(products1.length);
          let i, j;
          let quintetArray = [];
          for (i = 0, j = products1.length; i < j; i += 5) {
            quintetArray.push(products1.slice(i, i + 5));
          }
          // console.log(quintetArray);
          this.setState({
            quintet: [...quintetArray],
          });
        } else {
          let filteredProducts = [];
          products1.forEach((product) => {
            if (product.tag === this.props.filter) {
              filteredProducts.push(product);
            }
          });
          this.props.setProductCount(filteredProducts.length);
          let i, j;
          let quintetArray = [];
          for (i = 0, j = filteredProducts.length; i < j; i += 4) {
            quintetArray.push(filteredProducts.slice(i, i + 4));
          }
          // console.log(quintetArray);
          this.setState({
            quintet: [...quintetArray],
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    let rowMarkUp = this.state.quintet ? (
      <div>
        {this.state.quintet.map((quad) => {
          return <ProductRow rowItems={quad} />;
        })}
      </div>
    ) : (
      <p>Loading.. </p>
    );

    return <div className={style.outerDiv}>{rowMarkUp}</div>;
  }
}

export default ProductList;
