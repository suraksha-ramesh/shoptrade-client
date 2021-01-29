import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
export class Filter extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json"
      )
      .then((res) => {
        //console.log("result is - ", res.data);
        var length = res.data.length;
        //console.log("res.data length is - ", length);
        // console.log("res.data - ", res.data[length - 3]);
        var part1 = res.data.substring(0, length - 3);
        var part2 = res.data.substring(length - 2, length);
        var productString = part1 + part2;
        // console.log(productString);
        var products = JSON.parse(productString);
        // console.log(products);
        var uniqueTags = new Set();
        products.forEach((product) => {
          //   console.log(product.tag);
          uniqueTags.add(product.tag);
        });
        // console.log(uniqueTags);
        this.setState({
          values: [...uniqueTags],
        });
        // console.log("state = ", this.state);
      })
      .catch((err) => {
        console.log("Oops! Something weny wrong!");
      });
  }

  render() {
    return (
      <div>
        Filters:
        <Button>All Products</Button>
        {this.state.values.length ? (
          this.state.values.map((value) => (
            <Button key={value.id}>{value}</Button>
          ))
        ) : (
          <h3>Your filter list goes here...</h3>
        )}
      </div>
    );
  }
}

export default Filter;
