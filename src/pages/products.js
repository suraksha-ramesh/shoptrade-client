import React, { useState } from "react";
import postStyles from "../css/posts.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";

function Products1() {
  const [filter, setFilter] = useState("All Products");

  // setFilterValue = (value) => {
  //   setFilter(value);
  // };

  // console.log("filter from products", filter);

  return (
    <div>
      {/* Invite Friends section  */}
      <h5 className={postStyles.invite}>
        Invite Friends to Big Fashion Festival & Get Up To $150 MynCash For
        Every Person Who Visits!
      </h5>
      <div className={postStyles.outerDiv}>
        {/* Breadcrumb Section */}
        <nav className={`row justify-content-left container`}>
          <ol
            style={{ marginBottom: "0px" }}
            className={`${postStyles.breadcrumb} breadcrumb`}
          >
            <li className="breadcrumb-item align-items-center">
              <button className={`${postStyles.button} btn btn-link`}>
                Home
              </button>
            </li>
            <li className="breadcrumb-item align-items-center">
              <button className={`${postStyles.button} btn btn-link`}>
                Clothing
              </button>
            </li>
            <li className="breadcrumb-item align-items-center">
              <button className={`${postStyles.button} btn btn-link`}>
                Men's Clothing
              </button>
            </li>
            <li className="breadcrumb-item align-items-center">
              <button className={`${postStyles.button} btn btn-link`}>
                All Men Clothing
              </button>
            </li>
          </ol>
        </nav>

        {/* All Products heading */}
        <h4 className={`${postStyles.h4} `}>All Products</h4>

        {/* Filter */}
        <Filter setFilterValue={(value) => setFilter(value)} />

        {/* Product list */}
        <ProductList filter={filter} />
      </div>
    </div>
  );
}

export default Products1;
