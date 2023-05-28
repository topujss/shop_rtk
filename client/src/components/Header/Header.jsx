import './header.scss';
import '../../assets/css/style.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/vendor/animate/animate.min.css';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/logo_footer.png';

export default function Header() {
  return (
    <>
      <header className="header header-border">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <p className="welcome-msg">shop app with react redux toolkit!</p>
            </div>
            <div className="header-right">
              <div className="dropdown">
                <a href="#currency">USD</a>
                <div className="dropdown-box">
                  <a href="#USD">USD</a>
                  <a href="#EUR">EUR</a>
                </div>
              </div>
              {/* <!-- End of DropDown Menu --> */}

              <div className="dropdown">
                <a href="#language">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1377/1377975.png"
                    alt="ENG Flag"
                    width="14"
                    height="8"
                    className="dropdown-image"
                  />
                  ENG
                </a>
                <div className="dropdown-box">
                  <a href="#ENG">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1377/1377975.png"
                      alt="ENG Flag"
                      width="14"
                      height="8"
                      className="dropdown-image"
                    />
                    ENG
                  </a>
                </div>
              </div>
              {/* <!-- End of Dropdown Menu --> */}
              <span className="divider d-lg-show"></span>
              <a href="blog.html" className="d-lg-show">
                Blog
              </a>
              <a href="contact-us.html" className="d-lg-show">
                Contact Us
              </a>
              <a href="my-account.html" className="d-lg-show">
                My Account
              </a>
              <a href="../../assets/ajax/login.html" className="d-lg-show login sign-in">
                <i className="w-icon-account"></i>Sign In
              </a>
              <span className="delimiter d-lg-show">/</span>
              <a href="../../assets/ajax/login.html" className="ml-0 d-lg-show login register">
                Register
              </a>
            </div>
          </div>
        </div>
        {/* <!-- End of Header Top --> */}

        <div className="header-middle">
          <div className="container">
            <div className="header-left mr-md-4">
              <a href="#" className="mobile-menu-toggle w-icon-hamburger" aria-label="menu-toggle">
                {' '}
              </a>
              <Link to="/" className="logo ml-lg-0">
                <img src={Logo} alt="logo" width="144" />
              </Link>
              <form
                method="get"
                action="#"
                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
              >
                <div className="select-box">
                  <select id="category" name="category">
                    <option value="">All Categories</option>
                    <option value="4">Fashion</option>
                    <option value="5">Furniture</option>
                    <option value="6">Shoes</option>
                    <option value="7">Sports</option>
                    <option value="8">Games</option>
                    <option value="9">Computers</option>
                    <option value="10">Electronics</option>
                    <option value="11">Kitchen</option>
                    <option value="12">Clothing</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  id="search"
                  placeholder="Search in..."
                  required
                />
                <button className="btn btn-search" type="submit">
                  <i className="w-icon-search"></i>
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              <div className="header-call d-xs-show d-lg-flex align-items-center">
                <a href="tel:#" className="w-icon-call"></a>
                <div className="call-info d-lg-show">
                  <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                    <a href="/" className="text-capitalize">
                      Live Chat
                    </a>
                    &nbsp;or :
                  </h4>
                  <a href="tel:#" className="phone-number font-weight-bolder ls-50">
                    1(800)123-456
                  </a>
                </div>
              </div>
              <Link className="wishlist label-down link d-xs-show" to="/wish">
                <i className="w-icon-heart"></i>
                <span className="wishlist-label d-lg-show">Wishlist</span>
              </Link>
              <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                <div className="cart-overlay"></div>
                <Link to="/cart" className="cart-toggle label-down link">
                  <i className="w-icon-cart">
                    <span className="cart-count">2</span>
                  </i>
                  <span className="cart-label">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End of Header Middle --> */}

        <div className="header-bottom sticky-content fix-top sticky-header">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div className="dropdown category-dropdown has-border" data-visible="true">
                  <a
                    href="#"
                    className="category-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category"></i>
                    <span>Browse Categories</span>
                  </a>

                  <div className="dropdown-box">
                    <ul className="menu vertical-menu category-menu">
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          {' '}
                          <i className="w-icon-tshirt2"></i>Fashion{' '}
                        </a>
                        <ul className="megamenu">
                          <li>
                            <h4 className="menu-title">Women</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <a href="shop-fullwidth-banner.html">New Arrivals</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="menu-title">Men</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <a href="shop-fullwidth-banner.html">New Arrivals</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="banner-fixed menu-banner menu-banner2">
                              <figure>
                                <img
                                  src="https://i.ibb.co/ncRCC9f/1.jpg"
                                  alt="Menu Banner"
                                  width="235"
                                  height="347"
                                />
                              </figure>
                              <div className="banner-content">
                                <div className="banner-price-info mb-1 ls-normal">
                                  Get up to
                                  <strong className="text-primary text-uppercase">20%Off</strong>
                                </div>
                                <h3 className="banner-title ls-normal">Hot Sales</h3>
                                <a
                                  href="shop-banner-sidebar.html"
                                  className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                                >
                                  Shop Now<i className="w-icon-long-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/" className="font-weight-bold text-primary text-uppercase ls-25">
                          View All Categories<i className="w-icon-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <nav className="main-nav">
                  <ul className="menu active-underline">
                    <li>
                      <NavLink to="/" className="active">
                        Shop
                      </NavLink>

                      {/* <!-- Start of Megamenu --> */}
                      <ul className="megamenu">
                        <li>
                          <h4 className="menu-title">Product Layouts</h4>
                          <ul>
                            <li>
                              <a href="product-default.html">
                                Default<span className="tip tip-hot">Hot</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-vertical.html">Vertical Thumbs</a>
                            </li>
                            <li>
                              <a href="product-grid.html">Grid Images</a>
                            </li>
                            <li>
                              <a href="product-masonry.html">Masonry</a>
                            </li>
                            <li>
                              <a href="product-gallery.html">Gallery</a>
                            </li>
                            <li>
                              <a href="product-sticky-info.html">Sticky Info</a>
                            </li>
                            <li>
                              <a href="product-sticky-thumb.html">Sticky Thumbs</a>
                            </li>
                            <li>
                              <a href="product-sticky-both.html">Sticky Both</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      {/* <!-- End of Megamenu --> */}
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="about-us.html">Pages</a>
                    </li>
                    <li>
                      <Link to="/admin">My Account</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <a href="#" className="d-xl-show">
                  <i className="w-icon-map-marker mr-1"></i>Track Order
                </a>
                <a href="#">
                  <i className="w-icon-sale"></i>Daily Deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- End of Header --> */}
    </>
  );
}
