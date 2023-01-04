import React from "react";
import ProductCardListingItm from "../components/ProductCard/ProductCardListingItm";
import Sidebar from "../components/Sidebar/Sidebar";

function ProductInfoPage() {
  return (
    <div className="productListing" id="productListing">
      <div className="container-fluid px-0">
      <h1 className="pageTitle">Assignment 3 Step 1</h1>
        <div className="productListingRow">
        <Sidebar/>
        <div className="col-md-10 ps-3">
        <div className="productListingWrap">
           <ProductCardListingItm/>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoPage;
