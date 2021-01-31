import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import getProducts from "../utils/getProducts";

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json"
      )
      .then((res) => {
        let products = getProducts(res);
        let uniqueTags = new Set();
        products.forEach((product) => {
          //console.log(product.tag);
          uniqueTags.add(product.tag);
        });
        //console.log(uniqueTags);
        this.setState({
          values: [...uniqueTags],
        });
        if (uniqueTags.length > 0) {
        }

        //console.log("state = ", this.state);
      })
      .catch((err) => {
        console.log("Oops! Something weny wrong!");
      });
  }

  handleApplyFilter(event, value) {
    event.preventDefault();
    localStorage.setItem("filterValue", value);
    this.props.setFilterValue(value);
  }

  render() {
    return (
      <div>
        Filters:
        <Button onClick={(e) => this.handleApplyFilter(e, "All Products")}>
          All Products
        </Button>
        {this.state.values.length ? (
          this.state.values.map((value) => (
            <Button
              onClick={(e) => this.handleApplyFilter(e, value)}
              key={value.id}
            >
              {value}
            </Button>
          ))
        ) : (
          <h3>Your filter list goes here...</h3>
        )}
      </div>
    );
  }
}

export default Filter;
