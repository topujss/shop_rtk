import Product from '../../components/Product/Product';
import '../../assets/css/style.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/vendor/animate/animate.min.css';
import '../../assets/vendor/jquery/jquery.min.js';
import '../../assets/js/main.min.js';

import link3 from '../../assets/images/shop/3.jpg';
import link4 from '../../assets/images/shop/4.jpg';
import link5 from '../../assets/images/shop/5.jpg';
import link6 from '../../assets/images/shop/6.jpg';

const Shop = () => {
  return (
    <main className="main">
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb bb-no">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>
              <a href="shop-banner-sidebar.html">Shop</a>
            </li>
            <li>3 Columns</li>
          </ul>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="shop-content row gutter-lg mb-10">
            <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
              <div className="sidebar-overlay"></div>
              <a className="sidebar-close" href="#">
                <i className="close-icon"></i>
              </a>

              <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                  <div className="filter-actions">
                    <label>Filter :</label>
                    <a href="#" className="btn btn-dark btn-link filter-clean">
                      Clean All
                    </a>
                  </div>
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>All Categories</span>
                    </h3>
                    <ul className="widget-body filter-items search-ul">
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Babies</a>
                      </li>
                      <li>
                        <a href="#">Beauty</a>
                      </li>
                      <li>
                        <a href="#">Decoration</a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>All Tags</span>
                    </h3>
                    <ul className="widget-body filter-items search-ul">
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Babies</a>
                      </li>
                      <li>
                        <a href="#">Beauty</a>
                      </li>
                      <li>
                        <a href="#">Decoration</a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>Brand</span>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <a href="#">Elegant Auto Group</a>
                      </li>
                      <li>
                        <a href="#">Green Grass</a>
                      </li>
                      <li>
                        <a href="#">Node Js</a>
                      </li>
                      <li>
                        <a href="#">NS8</a>
                      </li>
                      <li>
                        <a href="#">Red</a>
                      </li>
                      <li>
                        <a href="#">Skysuite Tech</a>
                      </li>
                      <li>
                        <a href="#">Sterling</a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>Price</span>
                    </h3>
                    <div className="widget-body">
                      <form className="price-range">
                        <input
                          type="number"
                          name="min_price"
                          className="min_price text-center"
                          placeholder="$min"
                        />
                        <span className="delimiter">-</span>
                        <input
                          type="number"
                          name="max_price"
                          className="max_price text-center"
                          placeholder="$max"
                        />
                        <a href="#" className="btn btn-primary btn-rounded">
                          Go
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="main-content">
              <nav className="toolbox sticky-toolbox sticky-content fix-top">
                <div className="toolbox-left">
                  <a
                    href="#"
                    className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle btn-icon-left d-block d-lg-none"
                  >
                    <i className="w-icon-category"></i>
                    <span>Filters</span>
                  </a>
                  <div className="toolbox-item toolbox-sort select-box text-dark">
                    <label>Sort By :</label>
                    <select name="orderby" className="form-control">
                      <option value="default" selected="selected">
                        Default sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price-low">Sort by pric: low to high</option>
                      <option value="price-high">Sort by price: high to low</option>
                    </select>
                  </div>
                </div>
                <div className="toolbox-right">
                  <div className="toolbox-item toolbox-show select-box">
                    <select name="count" className="form-control">
                      <option value="9">Show 9</option>
                      <option value="12" selected="selected">
                        Show 12
                      </option>
                      <option value="24">Show 24</option>
                      <option value="36">Show 36</option>
                    </select>
                  </div>
                  <div className="toolbox-item toolbox-layout">
                    <a href="shop-banner-sidebar.html" className="icon-mode-grid btn-layout active">
                      <i className="w-icon-grid"></i>
                    </a>
                    <a href="shop-list.html" className="icon-mode-list btn-layout">
                      <i className="w-icon-list"></i>
                    </a>
                  </div>
                </div>
              </nav>
              <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                <Product productLink={`https://i.ibb.co/ncRCC9f/1.jpg`} />
                <Product productLink={link3} />
                <Product productLink={link4} />
                <Product productLink={link5} />
                <Product productLink={link6} />
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="/single">
                        <img src={link4} alt="Product" width="300" height="338" />
                        <img src={link5} alt="Product" width="300" height="338" />
                      </a>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact"
                          data-until="2024, 9, 9"
                          data-format="DHMS"
                          data-compact="true"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          00:00:00:00
                        </div>
                      </div>
                      <div className="product-action-horizontal">
                        <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quick View"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Electronics</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">Alarm Clock With Lamp</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{ width: '100%' }}></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a href="product-default.html" className="rating-reviews">
                          (10 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$30.00</ins>
                          <del className="old-price">$60.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="toolbox toolbox-pagination justify-content-between">
                <p className="showing-info mb-2 mb-sm-0">
                  Showing<span>1-12 of 60</span>Products
                </p>
                <ul className="pagination">
                  <li className="prev disabled">
                    <a href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                      <i className="w-icon-long-arrow-left"></i>Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="next">
                    <a href="#" aria-label="Next">
                      {' '}
                      Next<i className="w-icon-long-arrow-right"></i>{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
