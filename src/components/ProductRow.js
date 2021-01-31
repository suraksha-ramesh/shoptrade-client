import React from "react";
import Row from "react-bootstrap/Row";
import style from "../css/productList.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Product from "./Product";

function ProductRow(props) {
  let productMarkUp = props.rowItems ? (
    props.rowItems.map((item) => {
      return <Product key={item.id} product={item} />;
    })
  ) : (
    <p>Loading.. </p>
  );
  return (
    <div>
      <Row>{productMarkUp}</Row>
    </div>
  );
}

export default ProductRow;
