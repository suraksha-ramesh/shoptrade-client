import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import getProducts from "../utils/getProducts";
import style from "../css/filter.module.css";
import "bootstrap/dist/css/bootstrap.css";

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ["All Products"],
      activeFilter: "All Products",
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
          values: [...this.state.values, ...uniqueTags],
        });
      })
      .catch((err) => {
        console.log("Oops! Something weny wrong!");
      });
  }

  handleApplyFilter(event, value) {
    event.preventDefault();
    localStorage.setItem("filterValue", value);
    this.props.setFilterValue(value);

    this.setState({
      activeFilter: value,
    });
  }

  render() {
    return (
      <div className={`${style.outerDiv}`}>
        <b>FILTERS:</b>

        {this.state.values.length ? (
          this.state.values.map((value) => (
            <Button
              className={`${style.button} ${
                value === this.state.activeFilter ? "active" : ""
              }`}
              variant="light"
              onClick={(e) => this.handleApplyFilter(e, value)}
              key={value}
            >
              <b>{value}</b>
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
