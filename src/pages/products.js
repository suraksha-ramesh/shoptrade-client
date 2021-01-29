import React from "react";
import postStyles from "../css/posts.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Filter from "../components/Filter";
function products() {
  return (
    <div>
      {/* Invite Friends section  */}
      <h5 className={postStyles.invite}>
        Invite Friends to Big Fashion Festival & Get Up To $150 MynCash For
        Every Person WHo Visits!
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
        <Filter />
      </div>
    </div>
  );
}

export default products;
