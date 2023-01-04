import React from "react";
import { Link } from 'react-router-dom';
import productItemData from "../index";
function MainProductItem(props) {
  return productItemData.map((items) => (
    <Link to={`/logged/${items.productItemTitle}`} className="mainProductItme" key={items.id} id={`mianItems_${items.id}`}>
      <div className="mainProductItmeImg">
        <img src={items.ProductItemImage} alt={items.ProductItemImageAltName} />
      </div>
      <div className="mainProductTitle">
        <h3>{items.productItemTitle}</h3>
      </div>
    </Link>
  ));
}

export default MainProductItem;
