import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import style from "../css/productList.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { items } from "./ProductList";

class Product extends Component {
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

    let items = JSON.parse(localStorage.getItem("itemsInCart"));
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
        <del>{`$ ${this.props.product.compare_at_price}`}</del>{" "}
        <small className={style.discount}>
          {`${Math.round(
            (this.props.product.price / this.props.product.compare_at_price) *
              100
          )}%Off`}
        </small>
      </div>
    );

    let sizesMarkup = this.props.product.options ? (
      <Card.Text className={style.options}>
        Sizes:{" "}
        {this.props.product.options.map((option) => {
          return (
            <Button
              variant="default"
              className={style.sizeButton}
              key={option.id}
              onClick={(e) => this.handleOptionClick(option.value, e)}
            >
              {option.value}
            </Button>
          );
        })}
      </Card.Text>
    ) : (
      <p>Loading..</p>
    );

    let buttonMarkup = this.state.addToCartButton ? (
      <Button
        className={style.addToCartButton}
        disabled={this.state.isAddToCartButtonDisabled}
        variant="default"
        onClick={this.handleAddToCart}
      >
        Add to cart
      </Button>
    ) : (
      <Button variant="default" className={style.addToCartButton}>
        <Link to="/cart">Go to Cart</Link>
      </Button>
    );

    let sizeString = "";
    this.props.product.options.forEach((option) => {
      sizeString = sizeString + option.value + ", ";
    });
    sizeString = sizeString.slice(0, sizeString.length - 2);

    let sizes = this.props.product.options ? (
      <p>sizes: {sizeString} </p>
    ) : (
      <p>Loading...</p>
    );

    return (
      <Col
        onMouseLeave={this.handleMouseOut}
        onMouseOver={this.handleMouseEnter}
        xs={12}
        md={2}
        className={style.col}
        sm
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
            <Card.Body className={style.cardBodyOnHover}>
              {!this.state.isAddToCartButtonDisabled && buttonMarkup}
              {!this.state.isAddToCartButtonDisabled && sizes}
              {this.state.isAddToCartButtonDisabled && sizesMarkup}
              {priceMarkup}
            </Card.Body>
          )}
        </Card>
      </Col>
    );
  }
}

export default Product;
