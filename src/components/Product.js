import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import style from "../css/productList.module.css";
import "bootstrap/dist/css/bootstrap.css";
// import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { items } from "./ProductList";

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false,
      isAddToCartButtonDisabled: true,
      selectedSize: null,
      addToCartButton: true,
    };
  }

  handleMouseEnter = (event) => {
    event.preventDefault();
    this.setState({ isHover: true });
  };

  handleMouseOut = (event) => {
    event.preventDefault();
    this.setState({ isHover: false });
  };

  handleOptionClick(optionValue, event) {
    event.preventDefault();
    this.setState({ isAddToCartButtonDisabled: false });
    this.setState({ selectedSize: optionValue });
  }

  handleAddToCart = (event) => {
    event.preventDefault();

    items.push({
      product: this.props.product,
      quantity: 1,
      size: this.state.selectedSize,
    });
    localStorage.setItem("itemsInCart", JSON.stringify(items));
    this.setState({ addToCartButton: false });
  };

  render() {
    let priceMarkup = (
      <div>
        Price: $<b>{this.props.product.price}</b>{" "}
        <p>{this.props.product.compare_at_price}</p>
        <p>
          {Math.round(
            (this.props.product.price / this.props.product.compare_at_price) *
              100
          )}
          % OFF
        </p>
      </div>
    );

    let sizesMarkup = this.props.product.options ? (
      <Card.Text>
        {this.props.product.options.map((option) => {
          return (
            <button
              key={option.id}
              onClick={(e) => this.handleOptionClick(option.value, e)}
            >
              {option.value}
            </button>
          );
        })}
      </Card.Text>
    ) : (
      <p>Loading..</p>
    );

    let buttonMarkup = this.state.addToCartButton ? (
      <button
        disabled={this.state.isAddToCartButtonDisabled}
        variant="primary"
        onClick={this.handleAddToCart}
      >
        Add to cart
      </button>
    ) : (
      <button variant="primary">
        <Link to="/cart">Go to Cart</Link>
      </button>
    );

    return (
      <Col
        className={style.col}
        sm
        onMouseOver={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
      >
        <Card className={style.fill}>
          <Card.Img
            className={style.fillimg}
            variant="top"
            src={this.props.product.image_src}
          />
          {!this.state.isHover && (
            <Card.Body className={style.cardbody}>
              <Card.Title className={style.cardTitle}>
                {this.props.product.vendor}
              </Card.Title>
              <Card.Text className={style.cardText}>
                {this.props.product.name}
              </Card.Text>
              {priceMarkup}
            </Card.Body>
          )}

          {this.state.isHover && (
            <Card.Body className={style.cardbody}>
              {buttonMarkup}
              {sizesMarkup}
              {priceMarkup}
            </Card.Body>
          )}
        </Card>
      </Col>
    );
  }
}

export default Product;
