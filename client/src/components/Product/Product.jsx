import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ productLink }) => {
  return (
    <div className="product-wrap">
      <div className="product text-center">
        <figure className="product-media">
          <Link to="/single">
            <img src={productLink} alt="Product" width="300" height="338" />
          </Link>
          <div className="product-action-horizontal">
            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
            <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
          </div>
        </figure>
        <div className="product-details">
          <div className="product-cat">
            <a href="shop-banner-sidebar.html">Electronics</a>
          </div>
          <h3 className="product-name">
            <a href="/single">Apple Laptop</a>
          </h3>
          <div className="ratings-container">
            <div className="ratings-full">
              <span className="ratings" style={{ width: '80%' }}></span>
              <span className="tooltiptext tooltip-top"></span>
            </div>
            <a href="/single" className="rating-reviews">
              (5 reviews)
            </a>
          </div>
          <div className="product-pa-wrapper">
            <div className="product-price">$1,000.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
