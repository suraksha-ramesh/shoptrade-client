import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import { items } from "../components/ProductList";

function Cart() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    console.log(cartItems);
    setItemsInCart(cartItems);

    // itemsInCart &&
    //   itemsInCart.map((item) => {
    //     console.log(item.product.price);
    //     setTotalAmount(totalAmount + parseInt(item.product.price));
    //   });
  }, []);

  return (
    <div className="container">
      {itemsInCart ? (
        itemsInCart.map((item) => (
          <Row>
            <Col>
              <Image src={item.product.image_src} fluid />
            </Col>
            <Col xs={6}>
              <h3>
                {item.product.vendor} {item.product.name}
              </h3>
              <div>
                Price: $<b>{item.product.price}</b>{" "}
                <p>{item.product.compare_at_price}</p>
                <p>
                  {Math.round(
                    (item.product.price / item.product.compare_at_price) * 100
                  )}
                  % OFF
                </p>
              </div>
              <div>Size: {item.size}</div>
              <div>Quantity: {item.quantity}</div>
            </Col>
            <Col>
              <h4>$ {item.product.price}</h4>
            </Col>
          </Row>
        ))
      ) : (
        <h3>Nothing here yet.. </h3>
      )}
      {/* {totalAmount && <h3>`Total Amount: ${totalAmount}`</h3>} */}
    </div>
  );
}

export default Cart;
