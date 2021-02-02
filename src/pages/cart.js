import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
// import { items } from "../components/ProductList";
import Button from "react-bootstrap/Button";

import style from "../css/cart.module.css";
import { Card } from "react-bootstrap";

function Cart() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [itemCount, setItemount] = useState(0);

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    console.log(cartItems);
    setItemsInCart(cartItems);

    let noOfItemsInCart = 0;
    let totalSaved = 0;
    let total = 0;

    cartItems.forEach((item) => {
      total = total + item.product.price * item.quantity;
      noOfItemsInCart = noOfItemsInCart + item.quantity;
      totalSaved =
        totalSaved +
        (item.product.compare_at_price - item.product.price) * item.quantity;
    });

    setTotalAmount(total);
    setTotalSavings(totalSaved);
    setItemount(noOfItemsInCart);
  }, [totalAmount]);

  function handleQuantityDecrement(event, product) {
    event.preventDefault();
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    let index = cartItems.findIndex((x) => x.product.id == product.id);
    //console.log("index=", index);
    cartItems[index].quantity -= 1;
    console.log(cartItems[index].quantity);
    if (cartItems[index].quantity !== 0) {
      handleDeleteItem(event, product);
      //console.log("quantity", cartItems[index].quantity);
      setItemsInCart(cartItems);
      localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
      setTotalAmount(totalAmount - parseInt(itemsInCart[index].product.price));
      //window.location.reload();
    } else {
      handleDeleteItem(event, product);
    }
  }

  function handleQuantityIncrement(event, product) {
    event.preventDefault();
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    let index = cartItems.findIndex((x) => x.product.id == product.id);
    //console.log("index=", index);
    cartItems[index].quantity += 1;
    //console.log("quantity", cartItems[index].quantity);
    setItemsInCart(cartItems);
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
    setTotalAmount(totalAmount + parseInt(itemsInCart[index].product.price));
    //window.location.reload();
  }

  function handleDeleteItem(event, product) {
    event.preventDefault();
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    let index = cartItems.findIndex((x) => x.product.id == product.id);
    console.log("index=", index);
    cartItems.splice(index, 1);
    console.log(cartItems);
    setItemsInCart(cartItems);
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
    setTotalAmount(
      totalAmount -
        parseInt(itemsInCart[index].product.price * itemsInCart[index].quantity)
    );
  }

  return (
    <div className={`${style.outerDiv} container`}>
      <h4>Shopping Cart</h4>
      <hr />
      <Row>
        <Col xs={12} md={8} className={style.rowOuterDiv}>
          {itemsInCart ? (
            itemsInCart.map((item) => (
              <>
                <Row key={item.product.id} className={style.row}>
                  <Col>
                    <Image
                      className={style.image}
                      src={item.product.image_src}
                      fluid
                    />
                  </Col>
                  <Col xs={6}>
                    <h4>
                      {item.product.vendor} {item.product.name}
                    </h4>

                    <div>
                      <b> {`Price: $ ${item.product.price} `}</b>{" "}
                      <del>{`$ ${item.product.compare_at_price}`}</del>{" "}
                      <small className={style.discount}>
                        {`${Math.round(
                          ((item.product.compare_at_price -
                            item.product.price) *
                            100) /
                            item.product.compare_at_price
                        )}%Off`}
                      </small>
                    </div>

                    <div>
                      <b>Size: </b>
                      {item.size}
                    </div>
                    <div>
                      <b> Quantity: </b>
                      <Button
                        onClick={(e) =>
                          handleQuantityDecrement(e, item.product)
                        }
                        className={style.plusMinusQuantity}
                        variant="secondary"
                        size="sm"
                      >
                        -
                      </Button>{" "}
                      {item.quantity}{" "}
                      <Button
                        onClick={(e) =>
                          handleQuantityIncrement(e, item.product)
                        }
                        className={style.plusMinusQuantity}
                        variant="secondary"
                        size="sm"
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      onClick={(e) => handleDeleteItem(e, item.product)}
                      variant="link"
                    >
                      Delete
                    </Button>
                    <Button variant="link">Save for later</Button>
                  </Col>
                  <Col>
                    <h4>$ {item.product.price * item.quantity}</h4>
                  </Col>
                </Row>
                <hr />
              </>
            ))
          ) : (
            <h3>Nothing here yet.. </h3>
          )}
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Amount: $ {totalAmount}</Card.Title>
              <Card.Text>Items in Cart: {itemCount}</Card.Text>
              <Card.Text>Total Savings: $ {totalSavings}</Card.Text>
              <Button variant="Default" className={style.proceedToBuy}>
                Proceed To Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* {totalAmount && <h3>`Total Amount: ${totalAmount}`</h3>} */}
    </div>
  );
}

export default Cart;
