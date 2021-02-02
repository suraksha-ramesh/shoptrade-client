import React, { useState } from "react";
import postStyles from "../css/posts.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import Button from "react-bootstrap/Button";

function Products1() {
  const [filter, setFilter] = useState("All Products");
  const [productCount, setProductCount] = useState(0);

  return (
    <div>
      {/* Invite Friends section  */}
      <h5 className={postStyles.invite}>
        Invite Friends to Big Fashion Festival & Get Up To $150 MynCash For
        Every Person Who Visits!
        <button variant="light" className={postStyles.inviteButton}>
          Invite Now!
        </button>
      </h5>
      <div className={postStyles.outerDiv}>
        {/* Breadcrumb Section */}
        <nav className={`row justify-content-left container`}>
          <ol
            style={{ marginBottom: "0px" }}
            className={`${postStyles.breadcrumb} breadcrumb`}
          >
            <li className="breadcrumb-item align-items-center">
              <button variant="light" className={`${postStyles.button} btn `}>
                Home
              </button>
            </li>
            <li className="breadcrumb-item align-items-center">
              <button variant="light" className={`${postStyles.button} btn `}>
                Clothing
              </button>
            </li>
            <li className="breadcrumb-item align-items-center">
              <button
                variant="light"
                className={`active ${postStyles.button} btn `}
              >
                Men's Clothing
              </button>
            </li>
            <li className="breadcrumb-item align-items-center">
              <button variant="light" className={`${postStyles.button} btn `}>
                <b> All Mens Clothing </b>
              </button>
            </li>
          </ol>
        </nav>

        {/* All Products heading */}
        <h4 className={`${postStyles.h4} `}>
          {filter}
          <small>{`  (${productCount}  Products)`}</small>
        </h4>

        {/* Filter */}
        <Filter setFilterValue={(value) => setFilter(value)} />

        <hr />

        {/* Product list */}
        <ProductList
          filter={filter}
          setProductCount={(count) => setProductCount(count)}
        />
      </div>
    </div>
  );
}

export default Products1;
