import React from "react";
import { Link } from "react-router-dom";
import itemData from "./PItemData";

function ProductCardListingItm(props) {
  return itemData.map((pitem) => (
    <div className="col-md-3 px-3" key={pitem.id}>
      <div className="productCardWrap">
        <div className="itemImage">
          <img
            src={pitem.ItemImage}
            alt={pitem.ItemImageAltName}
          />
        </div>
        <div className="itemDetails">
          <div className="pro_itemDetails">
            <h5>{pitem.ItemTitle}</h5>
            <h6>
              ₹ {pitem.mainPrice} <del>₹ {pitem.delPrice}</del>
            </h6>
            <Link to="" className="btn addtoCartBtn">
            {pitem.addCartBtnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default ProductCardListingItm;
