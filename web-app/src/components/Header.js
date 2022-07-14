import React from "react";
import { useSelector } from 'react-redux';


import logo from '../images/logo.png';


import slide from '../images/slide-1.jpeg';

function Dashboard(setCurrentId, setContacts) {
   const productList = useSelector((state) => state.posts);
   console.log("postData##", productList)

   return (
      <div className="site">
         <header className="site__mobile-header">
            <div className="mobile-header">
               <div className="container">
                  <div className="mobile-header__body">
                     <button className="mobile-header__menu-button" type="button">
                        <svg width="18px" height="14px">
                           <path d="M-0,8L-0,6L18,6L18,8L-0,8ZM-0,-0L18,-0L18,2L-0,2L-0,-0ZM14,14L-0,14L-0,12L14,12L14,14Z"></path>
                        </svg>
                     </button>
                     <a className="mobile-header__logo" href="">
                        <div>
                           <img src={logo} alt="Logo" style={{ "height": "30px", "width": "100px" }} className="mobile-header__logo-part-one" />
                        </div>
                     </a>
                     <div className="mobile-header__search mobile-search">
                        <form className="mobile-search__body">
                           <input type="text" className="mobile-search__input" placeholder="Enter keyword or part number" name="title" />
                           <button type="button" className="mobile-search__vehicle-picker" aria-label="Select Vehicle">
                              <svg width="20" height="20">
                                 <path d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
                                 c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
                                 C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
                                 c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
                                 c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
                                 C15.5,10.2,14,11.3,14,12z"></path>
                              </svg>
                              <span className="mobile-search__vehicle-picker-label">Vehicle</span>
                           </button>
                           <button type="submit" className="mobile-search__button mobile-search__button--search">
                              <svg width="20" height="20">
                                 <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                                 c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                                 c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                              </svg>
                           </button>
                           <button type="button" className="mobile-search__button mobile-search__button--close">
                              <svg width="20" height="20">
                                 <path d="M16.7,16.7L16.7,16.7c-0.4,0.4-1,0.4-1.4,0L10,11.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L8.6,10L3.3,4.7
                                 c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L10,8.6l5.3-5.3c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L11.4,10l5.3,5.3
                                 C17.1,15.7,17.1,16.3,16.7,16.7z"></path>
                              </svg>
                           </button>
                           <div className="mobile-search__field"></div>
                        </form>
                     </div>
                     <div className="mobile-header__indicators">
                        <div className="mobile-indicator mobile-indicator--search d-md-none">
                           <button type="button" className="mobile-indicator__button">
                              <span className="mobile-indicator__icon">
                                 <svg width="20" height="20">
                                    <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                                    c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                                    c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                                 </svg>
                              </span>
                           </button>
                        </div>
                        <div className="mobile-indicator d-none d-md-block">
                           <a href="account-login.html" className="mobile-indicator__button">
                              <span className="mobile-indicator__icon">
                                 <svg width="20" height="20">
                                    <path d="M20,20h-2c0-4.4-3.6-8-8-8s-8,3.6-8,8H0c0-4.2,2.6-7.8,6.3-9.3C4.9,9.6,4,7.9,4,6c0-3.3,2.7-6,6-6s6,2.7,6,6
                                    c0,1.9-0.9,3.6-2.3,4.7C17.4,12.2,20,15.8,20,20z M14,6c0-2.2-1.8-4-4-4S6,3.8,6,6s1.8,4,4,4S14,8.2,14,6z"></path>
                                 </svg>
                              </span>
                           </a>
                        </div>
                        <div className="mobile-indicator d-none d-md-block">
                           <a href="wishlist.html" className="mobile-indicator__button">
                              <span className="mobile-indicator__icon">
                                 <svg width="20" height="20">
                                    <path d="M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1
                                    c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z"></path>
                                 </svg>
                              </span>
                           </a>
                        </div>
                        <div className="mobile-indicator">
                           <a href="cart.html" className="mobile-indicator__button">
                              <span className="mobile-indicator__icon">
                                 <svg width="20" height="20">
                                    <circle cx="7" cy="17" r="2"></circle>
                                    <circle cx="15" cy="17" r="2"></circle>
                                    <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                 </svg>
                                 <span className="mobile-indicator__counter">3</span>
                              </span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <header className="site__header">
            <div className="header">
               <div className="header__megamenu-area megamenu-area">
               </div>
               <div className="header__topbar-classic-bg"></div>
               <div className="header__topbar-classic">
                  <div className="topbar topbar--classic">
                     <div className="topbar__item-text"><a className="topbar__link" href="about-us.html">About Us</a></div>
                     <div className="topbar__item-text"><a className="topbar__link" href="contact-us-v1.html">Contacts</a></div>
                     <div className="topbar__item-text"><a className="topbar__link" href="">Store Location</a></div>
                     <div className="topbar__item-text"><a className="topbar__link" href="track-order.html">Track Order</a></div>
                     <div className="topbar__item-text"><a className="topbar__link" href="blog-classic-right-sidebar.html">Blog</a></div>
                     <div className="topbar__item-spring"></div>
                     <div className="topbar__item-button"><a href="" className="topbar__button"><span className="topbar__button-label">Compare:</span> <span className="topbar__button-title">5</span></a></div>
                     <div className="topbar__item-button topbar__menu">
                        <button className="topbar__button topbar__button--has-arrow topbar__menu-button" type="button">
                           <span className="topbar__button-label">Currency:</span> <span className="topbar__button-title">USD</span>
                           <span className="topbar__button-arrow">
                              <svg width="7px" height="5px">
                                 <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                              </svg>
                           </span>
                        </button>
                        <div className="topbar__menu-body"><a className="topbar__menu-item" href="#">€ Euro</a> <a className="topbar__menu-item" href="#">£ Pound Sterling</a> <a className="topbar__menu-item" href="#">$ US Dollar</a> <a className="topbar__menu-item" href="#">₽ Russian Ruble</a></div>
                     </div>
                     <div className="topbar__menu">
                        <button className="topbar__button topbar__button--has-arrow topbar__menu-button" type="button">
                           <span className="topbar__button-label">Language:</span> <span className="topbar__button-title">EN</span>
                           <span className="topbar__button-arrow">
                              <svg width="7px" height="5px">
                                 <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                              </svg>
                           </span>
                        </button>
                        <div className="topbar__menu-body"><a className="topbar__menu-item" href="#">
                           {/* <img src={language1} alt="memories"> */}
                           <span>English</span> </a><a className="topbar__menu-item" href="#">
                              {/* <img src={language2} alt="memories"> */}
                              <span>French</span> </a><a className="topbar__menu-item" href="#">
                              {/* <img src={language3} alt="memories"> */}
                              <span>German</span> </a><a className="topbar__menu-item" href="#">
                              {/* <img src={language4} alt="memories"> */}
                              <span>Russian</span> </a><a className="topbar__menu-item" href="#">
                              {/* <img src={language5} alt="memories"> */}
                              <span>Italian</span></a></div>
                     </div>
                  </div>
               </div>
               <div className="header__navbar">
                  <div className="header__navbar-departments">
                     <div className="departments">
                        <button className="departments__button" type="button">
                           <span className="departments__button-icon">
                              <svg width="16px" height="12px">
                                 <path d="M0,7L0,5L16,5L16,7L0,7ZM0,0L16,0L16,2L0,2L0,0ZM12,12L0,12L0,10L12,10L12,12Z"></path>
                              </svg>
                           </span>
                           <span className="departments__button-title">Shop By Category</span>
                           <span className="departments__button-arrow">
                              <svg width="9px" height="6px">
                                 <path d="M0.2,0.4c0.4-0.4,1-0.5,1.4-0.1l2.9,3l2.9-3c0.4-0.4,1.1-0.4,1.4,0.1c0.3,0.4,0.3,0.9-0.1,1.3L4.5,6L0.3,1.6C-0.1,1.3-0.1,0.7,0.2,0.4z"></path>
                              </svg>
                           </span>
                        </button>
                        <div className="departments__menu">
                           <div className="departments__arrow"></div>
                           <div className="departments__body">
                              <ul className="departments__list">
                                 <li className="departments__list-padding" role="presentation"></li>
                                 <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                    <a href="" className="departments__item-link">
                                       Headlights &amp; Lighting
                                       <span className="departments__item-arrow">
                                          <svg width="7" height="11">
                                             <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                             C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                          </svg>
                                       </span>
                                    </a>
                                    <div className="departments__item-menu">
                                       <div className="megamenu departments__megamenu departments__megamenu--size--xl">
                                          <div className="megamenu__image">
                                             {/* <img src="images/departments/departments-2.jpg" alt=""> */}

                                          </div>
                                          <div className="row">
                                             <div className="col-1of5">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                </ul>
                                             </div>
                                             <div className="col-1of5">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Switches &amp; Relays</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Corner Lights</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Brakes &amp; Suspension</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Discs</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Wheel Hubs</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Suspension</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Ball Joints</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Pad Sets</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div className="col-1of5">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Interior Parts</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Floor Mats</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Gauges</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Consoles &amp; Organizers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Mobile Electronics</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering Wheels</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cargo Accessories</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Engine &amp; Drivetrain</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Oxygen Sensors</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Heating</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Exhaust</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cranks &amp; Pistons</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div className="col-1of5">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Tools &amp; Garage</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Repair Manuals</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Care</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Code Readers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tool Boxes</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                    <a href="" className="departments__item-link">
                                       Interior Parts
                                       <span className="departments__item-arrow">
                                          <svg width="7" height="11">
                                             <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                             C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                          </svg>
                                       </span>
                                    </a>
                                    <div className="departments__item-menu">
                                       <div className="megamenu departments__megamenu departments__megamenu--size--lg">
                                          <div className="megamenu__image">
                                             {/* <img src="images/departments/departments-1.jpg" alt=""> */}

                                          </div>
                                          <div className="row">
                                             <div className="col-3">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                </ul>
                                             </div>
                                             <div className="col-3">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Switches &amp; Relays</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Corner Lights</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Brakes &amp; Suspension</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Discs</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Wheel Hubs</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Suspension</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Ball Joints</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Pad Sets</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div className="col-3">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Interior Parts</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Floor Mats</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Gauges</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Consoles &amp; Organizers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Mobile Electronics</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering Wheels</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cargo Accessories</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div className="col-3">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Tools &amp; Garage</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Repair Manuals</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Care</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Code Readers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tool Boxes</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                    <a href="" className="departments__item-link">
                                       Switches &amp; Relays
                                       <span className="departments__item-arrow">
                                          <svg width="7" height="11">
                                             <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                             C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                          </svg>
                                       </span>
                                    </a>
                                    <div className="departments__item-menu">
                                       <div className="megamenu departments__megamenu departments__megamenu--size--md">
                                          <div className="megamenu__image">
                                             {/* <img src="images/departments/departments-3.jpg" alt=""> */}

                                          </div>
                                          <div className="row">
                                             <div className="col-4">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                </ul>
                                             </div>
                                             <div className="col-4">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Switches &amp; Relays</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Corner Lights</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Brakes &amp; Suspension</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Discs</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Wheel Hubs</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Suspension</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Ball Joints</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Pad Sets</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div className="col-4">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Interior Parts</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Floor Mats</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Gauges</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Consoles &amp; Organizers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Mobile Electronics</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                    <a href="" className="departments__item-link">
                                       Tires &amp; Wheels
                                       <span className="departments__item-arrow">
                                          <svg width="7" height="11">
                                             <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                             C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                          </svg>
                                       </span>
                                    </a>
                                    <div className="departments__item-menu">
                                       <div className="megamenu departments__megamenu departments__megamenu--size--nl">
                                          <div className="megamenu__image">
                                             {/* <img src="images/departments/departments-4.jpg" alt=""> */}

                                          </div>
                                          <div className="row">
                                             <div className="col-6">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                </ul>
                                             </div>
                                             <div className="col-6">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                      </ul>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="departments__item departments__item--submenu--megamenu departments__item--has-submenu">
                                    <a href="" className="departments__item-link">
                                       Tools &amp; Garage
                                       <span className="departments__item-arrow">
                                          <svg width="7" height="11">
                                             <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                             C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                          </svg>
                                       </span>
                                    </a>
                                    <div className="departments__item-menu">
                                       <div className="megamenu departments__megamenu departments__megamenu--size--sm">
                                          <div className="row">
                                             <div className="col-12">
                                                <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                   <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                      <a className="megamenu-links__item-link" href="">Body Parts</a>
                                                      <ul className="megamenu-links">
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Bumpers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Hoods</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Grilles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Door Handles</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Car Covers</a></li>
                                                         <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tailgates</a></li>
                                                      </ul>
                                                   </li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Suspension</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Steering</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fuel Systems</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Transmission</a></li>
                                                   <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="departments__item"><a href="" className="departments__item-link">Clutches</a></li>
                                 <li className="departments__item"><a href="" className="departments__item-link">Fuel Systems</a></li>
                                 <li className="departments__item"><a href="" className="departments__item-link">Steering</a></li>
                                 <li className="departments__item"><a href="" className="departments__item-link">Suspension</a></li>
                                 <li className="departments__item"><a href="" className="departments__item-link">Body Parts</a></li>
                                 <li className="departments__item"><a href="" className="departments__item-link">Transmission</a></li>
                                 <li className="departments__item"><a href="" className="departments__item-link">Air Filters</a></li>
                                 <li className="departments__list-padding" role="presentation"></li>
                              </ul>
                              <div className="departments__menu-container"></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="header__navbar-menu">
                     <div className="main-menu">
                        <ul className="main-menu__list">
                           <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                              <a href="#" className="main-menu__link">
                                 Home
                                 <svg width="7px" height="5px">
                                    <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                 </svg>
                              </a>
                              <div className="main-menu__submenu">
                                 <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Home One</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Home Two</a></li>
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="#" className="menu__link">
                                          Header Spaceship
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="#" className="menu__link">Variant One</a></li>
                                             <li className="menu__item"><a href="#" className="menu__link">Variant Two</a></li>
                                             <li className="menu__item"><a href="#" className="menu__link">Variant Three</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="#" className="menu__link">
                                          Header classNameic
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="#" className="menu__link">Variant One</a></li>
                                             <li className="menu__item"><a href="#" className="menu__link">Variant Two</a></li>
                                             <li className="menu__item"><a href="#" className="menu__link">Variant Three</a></li>
                                             <li className="menu__item"><a href="#" className="menu__link">Variant Four</a></li>
                                             <li className="menu__item"><a href="#" className="menu__link">Variant Five</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="#" className="menu__link">
                                          Mobile Header
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="mobile-header-variant-one.html" className="menu__link">Variant One</a></li>
                                             <li className="menu__item"><a href="mobile-header-variant-two.html" className="menu__link">Variant Two</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </li>
                           <li className="main-menu__item main-menu__item--submenu--megamenu main-menu__item--has-submenu">
                              <a href="index.html" className="main-menu__link">
                                 Megamenu
                                 <svg width="7px" height="5px">
                                    <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                 </svg>
                              </a>
                              <div className="main-menu__submenu">
                                 <div className="main-menu__megamenu main-menu__megamenu--size--nl">
                                    <div className="megamenu">
                                       <div className="row">
                                          <div className="col-6">
                                             <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                   <a className="megamenu-links__item-link" href="">Headlights &amp; Lighting</a>
                                                   <ul className="megamenu-links">
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Headlights</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Tail Lights</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Fog Lights</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Turn Signals</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Switches &amp; Relays</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Corner Lights</a></li>
                                                   </ul>
                                                </li>
                                                <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                   <a className="megamenu-links__item-link" href="">Brakes &amp; Suspension</a>
                                                   <ul className="megamenu-links">
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Brake Discs</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Wheel Hubs</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Suspension</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Ball Joints</a></li>
                                                   </ul>
                                                </li>
                                             </ul>
                                          </div>
                                          <div className="col-6">
                                             <ul className="megamenu__links megamenu-links megamenu-links--root">
                                                <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                   <a className="megamenu-links__item-link" href="">Interior Parts</a>
                                                   <ul className="megamenu-links">
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Floor Mats</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Gauges</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Consoles &amp; Organizers</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Mobile Electronics</a></li>
                                                   </ul>
                                                </li>
                                                <li className="megamenu-links__item megamenu-links__item--has-submenu">
                                                   <a className="megamenu-links__item-link" href="">Engine &amp; Drivetrain</a>
                                                   <ul className="megamenu-links">
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Air Filters</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Oxygen Sensors</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Heating</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Exhaust</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cranks &amp; Pistons</a></li>
                                                      <li className="megamenu-links__item"><a className="megamenu-links__item-link" href="">Cargo Accessories</a></li>
                                                   </ul>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                              <a href="shop-grid-4-columns-sidebar.html" className="main-menu__link">
                                 Shop
                                 <svg width="7px" height="5px">
                                    <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                 </svg>
                              </a>
                              <div className="main-menu__submenu">
                                 <ul className="menu">
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="category-4-columns-sidebar.html" className="menu__link">
                                          Category
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="category-3-columns-sidebar.html" className="menu__link">3 Columns Sidebar</a></li>
                                             <li className="menu__item"><a href="category-4-columns-sidebar.html" className="menu__link">4 Columns Sidebar</a></li>
                                             <li className="menu__item"><a href="category-5-columns-sidebar.html" className="menu__link">5 Columns Sidebar</a></li>
                                             <li className="menu__item"><a href="category-4-columns-full.html" className="menu__link">4 Columns Full</a></li>
                                             <li className="menu__item"><a href="category-5-columns-full.html" className="menu__link">5 Columns Full</a></li>
                                             <li className="menu__item"><a href="category-6-columns-full.html" className="menu__link">6 Columns Full</a></li>
                                             <li className="menu__item"><a href="category-7-columns-full.html" className="menu__link">7 Columns Full</a></li>
                                             <li className="menu__item"><a href="category-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="shop-grid-4-columns-sidebar.html" className="menu__link">
                                          Shop Grid
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="shop-grid-6-columns-full.html" className="menu__link">6 Columns Full</a></li>
                                             <li className="menu__item"><a href="shop-grid-5-columns-full.html" className="menu__link">5 Columns Full</a></li>
                                             <li className="menu__item"><a href="shop-grid-4-columns-full.html" className="menu__link">4 Columns Full</a></li>
                                             <li className="menu__item"><a href="shop-grid-4-columns-sidebar.html" className="menu__link">4 Columns Sidebar</a></li>
                                             <li className="menu__item"><a href="shop-grid-3-columns-sidebar.html" className="menu__link">3 Columns Sidebar</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item"><a href="shop-list.html" className="menu__link">Shop List</a></li>
                                    <li className="menu__item"><a href="shop-table.html" className="menu__link">Shop Table</a></li>
                                    <li className="menu__item"><a href="shop-right-sidebar.html" className="menu__link">Shop Right Sidebar</a></li>
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="product-full.html" className="menu__link">
                                          Product
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="product-full.html" className="menu__link">Full Width</a></li>
                                             <li className="menu__item"><a href="product-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item"><a href="cart.html" className="menu__link">Cart</a></li>
                                    <li className="menu__item"><a href="checkout.html" className="menu__link">Checkout</a></li>
                                    <li className="menu__item"><a href="order-success.html" className="menu__link">Order Success</a></li>
                                    <li className="menu__item"><a href="wishlist.html" className="menu__link">Wishlist</a></li>
                                    <li className="menu__item"><a href="compare.html" className="menu__link">Compare</a></li>
                                    <li className="menu__item"><a href="track-order.html" className="menu__link">Track Order</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                              <a href="blog-classic-right-sidebar.html" className="main-menu__link">
                                 Blog
                                 <svg width="7px" height="5px">
                                    <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                 </svg>
                              </a>
                              <div className="main-menu__submenu">
                                 <ul className="menu">
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="blog-classic-right-sidebar.html" className="menu__link">
                                          Blog Classic
                                          <span class="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="blog-classic-left-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                             <li className="menu__item"><a href="blog-classic-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="blog-list-right-sidebar.html" className="menu__link">
                                          Blog List
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="blog-list-left-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                             <li className="menu__item"><a href="blog-list-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="blog-grid-right-sidebar.html" className="menu__link">
                                          Blog Grid
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="blog-grid-left-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                             <li className="menu__item"><a href="blog-grid-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item menu__item--has-submenu">
                                       <a href="post-full-width.html" className="menu__link">
                                          Post Page
                                          <span className="menu__arrow">
                                             <svg width="6px" height="9px">
                                                <path d="M0.3,7.4l3-2.9l-3-2.9c-0.4-0.3-0.4-0.9,0-1.3l0,0c0.4-0.3,0.9-0.4,1.3,0L6,4.5L1.6,8.7c-0.4,0.4-0.9,0.4-1.3,0l0,0C-0.1,8.4-0.1,7.8,0.3,7.4z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                       <div className="menu__submenu">
                                          <ul className="menu">
                                             <li className="menu__item"><a href="post-full-width.html" className="menu__link">Full Width</a></li>
                                             <li className="menu__item"><a href="post-left-sidebar.html" className="menu__link">Left Sidebar</a></li>
                                             <li className="menu__item"><a href="post-right-sidebar.html" className="menu__link">Right Sidebar</a></li>
                                          </ul>
                                       </div>
                                    </li>
                                    <li className="menu__item"><a href="post-without-image.html" className="menu__link">Post Without Image</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                              <a href="account-login.html" className="main-menu__link">
                                 Account
                                 <svg width="7px" height="5px">
                                    <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                 </svg>
                              </a>
                              <div className="main-menu__submenu">
                                 <ul className="menu">
                                    <li className="menu__item"><a href="account-login.html" className="menu__link">Login &amp; Register</a></li>
                                    <li className="menu__item"><a href="account-dashboard.html" className="menu__link">Dashboard</a></li>
                                    <li className="menu__item"><a href="account-garage.html" className="menu__link">Garage</a></li>
                                    <li className="menu__item"><a href="account-profile.html" className="menu__link">Edit Profile</a></li>
                                    <li className="menu__item"><a href="account-orders.html" className="menu__link">Order History</a></li>
                                    <li className="menu__item"><a href="account-order-details.html" className="menu__link">Order Details</a></li>
                                    <li className="menu__item"><a href="account-addresses.html" className="menu__link">Address Book</a></li>
                                    <li className="menu__item"><a href="account-edit-address.html" className="menu__link">Edit Address</a></li>
                                    <li className="menu__item"><a href="account-password.html" className="menu__link">Change Password</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                              <a href="about-us.html" className="main-menu__link">
                                 Pages
                                 <svg width="7px" height="5px">
                                    <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                 </svg>
                              </a>
                              <div className="main-menu__submenu">
                                 <ul className="menu">
                                    <li className="menu__item"><a href="about-us.html" className="menu__link">About Us</a></li>
                                    <li className="menu__item"><a href="contact-us-v1.html" className="menu__link">Contact Us v1</a></li>
                                    <li className="menu__item"><a href="contact-us-v2.html" className="menu__link">Contact Us v2</a></li>
                                    <li className="menu__item"><a href="404.html" className="menu__link">404</a></li>
                                    <li className="menu__item"><a href="terms.html" className="menu__link">Terms And Conditions</a></li>
                                    <li className="menu__item"><a href="faq.html" className="menu__link">FAQ</a></li>
                                    <li className="menu__item"><a href="components.html" className="menu__link">Components</a></li>
                                    <li className="menu__item"><a href="typography.html" className="menu__link">Typography</a></li>
                                 </ul>
                              </div>
                           </li>
                           <li className="main-menu__item"><a href="https://themeforest.net/item/redparts-auto-parts-html-template/24735474" className="main-menu__link" target="_blank">Buy Theme</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="header__navbar-phone phone">
                     <a href="" className="phone__body">
                        <div className="phone__title">Call Us:</div>
                        <div className="phone__number">800 060-0730</div>
                     </a>
                  </div>
               </div>
               <div className="header__logo">
                  <a href="index.html" className="logo">
                     <div className="logo__slogan">Auto parts for Cars, trucks and motorcycles</div>
                     <div className="logo__image">

                        <svg width="168" height="26">
                           <path className="logo__part-primary" d="M50,26h-5c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h5c6.6,0,12,5.4,12,12v2C62,20.6,56.6,26,50,26z M57,12
                           c0-3.9-3.1-7-7-7h-0.8C48.5,5,48,5.5,48,6.2v13.6c0,0.7,0.5,1.2,1.2,1.2H50c3.9,0,7-3.1,7-7V12z M38.5,26h-13h-2
                           c-0.8,0-1.5-0.7-1.5-1.5v-2v-9v-2v-8v-2C22,0.7,22.7,0,23.5,0h2h13C39.3,0,40,0.7,40,1.5v2C40,4.3,39.3,5,38.5,5H27v5h9.5
                           c0.8,0,1.5,0.7,1.5,1.5v2c0,0.8-0.7,1.5-1.5,1.5H27v6h11.5c0.8,0,1.5,0.7,1.5,1.5v2C40,25.3,39.3,26,38.5,26z M18.8,23.8
                           c0.6,1-0.1,2.3-1.3,2.3h-2.3c-0.5,0-1-0.3-1.3-0.8L9.7,18H5v6.5C5,25.3,4.3,26,3.5,26h-2C0.7,26,0,25.3,0,24.5v-23
                           C0,0.7,0.7,0,1.5,0H10c5,0,9,4,9,9c0,3.2-1.7,6.1-4.3,7.7L18.8,23.8z M10,5H6C5.5,5,5,5.4,5,6v6c0,0.6,0.4,1,1,1h4c2.2,0,4-1.8,4-4
                           S12.2,5,10,5z"></path>
                           <path className="logo__part-secondary" d="M166.5,8h-2.3c-0.6,0-1.1-0.4-1.4-1c-0.5-1.2-2-2-3.8-2c-2.2,0-4,1.3-4,3c0,0.9,0.6,1.8,1.5,2.3
                           c0.2,0.1,0.5,0.3,0.7,0.4c0.9,0.3,1.2,1.3,0.7,2.1l-1,1.7c-0.4,0.7-1.2,0.9-1.9,0.6c-1.2-0.5-2.3-1.3-3.1-2.2c-1.2-1.4-2-3.1-2-5
                           c0-4.4,4-8,9-8c4.3,0,8,2.6,8.9,6.2C168.2,7.1,167.4,8,166.5,8z M151.5,18h2.3c0.6,0,1.1,0.4,1.4,1c0.5,1.2,2,2,3.8,2
                           c2.2,0,4-1.3,4-3c0-0.9-0.6-1.8-1.5-2.3c-0.2-0.1-0.5-0.3-0.7-0.4c-0.9-0.3-1.2-1.3-0.7-2.1l1-1.7c0.4-0.6,1.2-0.9,1.9-0.6
                           c1.2,0.5,2.3,1.3,3.1,2.2c1.2,1.4,2,3.1,2,5c0,4.4-4,8-9,8c-4.3,0-8-2.6-8.9-6.2C149.8,18.9,150.6,18,151.5,18z M146.5,5H140v19.5
                           c0,0.8-0.7,1.5-1.5,1.5h-2c-0.8,0-1.5-0.7-1.5-1.5V5h-6.5c-0.8,0-1.5-0.7-1.5-1.5v-2c0-0.8,0.7-1.5,1.5-1.5h18
                           c0.8,0,1.5,0.7,1.5,1.5v2C148,4.3,147.3,5,146.5,5z M125.8,23.8c0.6,1-0.2,2.3-1.3,2.3h-2.3c-0.5,0-1-0.3-1.3-0.8l-4.2-7.3H112v6.5
                           c0,0.8-0.7,1.5-1.5,1.5h-2c-0.8,0-1.5-0.7-1.5-1.5v-23c0-0.8,0.7-1.5,1.5-1.5h8.5c5,0,9,4,9,9c0,3.2-1.7,6.1-4.3,7.7L125.8,23.8z
                           M117,5h-4c-0.5,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h4c2.2,0,4-1.8,4-4S119.2,5,117,5z M103.8,26h-2.3c-0.7,0-1.4-0.4-1.6-1.1l-2.4-6.7
                           c0-0.1-0.1-0.1-0.2-0.1h-7.5c-0.1,0-0.2,0.1-0.2,0.1l-2.4,6.7c-0.2,0.7-0.9,1.1-1.6,1.1h-2.3c-0.8,0-1.4-0.8-1.1-1.6l8.3-23.3
                           C90.7,0.4,91.3,0,92,0H95c0.7,0,1.4,0.4,1.6,1.1l8.3,23.3C105.2,25.2,104.6,26,103.8,26z M95.5,12.7l-1.8-4.9
                           c-0.1-0.2-0.3-0.2-0.4,0l-1.8,4.9c0,0.1,0.1,0.3,0.2,0.3h3.5C95.4,13,95.5,12.9,95.5,12.7z M83.9,10.2c0,0.2-0.1,0.4-0.1,0.6
                           c0,0.2-0.1,0.4-0.1,0.6c-0.1,0.5-0.3,1.1-0.6,1.6c-0.1,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.1,0.2-0.2,0.4c-0.2,0.4-0.5,0.7-0.8,1.1
                           c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.5,0.5-1.1,0.9-1.7,1.3c-1.4,0.8-3,1.3-4.7,1.3h-5v6.5c0,0.8-0.7,1.5-1.5,1.5
                           h-2c-0.8,0-1.5-0.7-1.5-1.5v-23C65,0.7,65.7,0,66.5,0H75c1.7,0,3.3,0.5,4.7,1.3c0.6,0.4,1.2,0.8,1.7,1.3c0.1,0.1,0.2,0.2,0.3,0.3
                           c0.1,0.1,0.2,0.2,0.3,0.3c0.3,0.3,0.5,0.7,0.8,1.1c0.1,0.1,0.1,0.2,0.2,0.3C83,4.8,83.1,5,83.1,5.1c0.2,0.5,0.4,1,0.6,1.6
                           c0,0.2,0.1,0.4,0.1,0.6c0,0.2,0.1,0.4,0.1,0.6C83.9,8,84,8.2,84,8.4c0,0.2,0,0.4,0,0.6s0,0.4,0,0.6C84,9.8,83.9,10,83.9,10.2z M75,5
                           h-4c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h4c2.2,0,4-1.8,4-4S77.2,5,75,5z"></path>
                        </svg>

                     </div>
                  </a>
               </div>
               <div className="header__search">
                  <div className="search">
                     <form action="" className="search__body">
                        <div className="search__shadow"></div>
                        {/* <input className="search__input" type="text" placeholder="Enter Keyword or Part Number">  */}
                        <button className="search__button search__button--start" type="button">
                           <span className="search__button-icon">
                              <svg width="20" height="20">
                                 <path d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
                                 c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
                                 C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
                                 c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
                                 c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
                                 C15.5,10.2,14,11.3,14,12z"></path>
                              </svg>
                           </span>
                           <span className="search__button-title">Select Vehicle</span>
                        </button>
                        <button className="search__button search__button--end" type="submit">
                           <span className="search__button-icon">
                              <svg width="20" height="20">
                                 <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                                 c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                                 c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                              </svg>
                           </span>
                        </button>
                        <div className="search__box"></div>
                        <div className="search__decor">
                           <div className="search__decor-start"></div>
                           <div className="search__decor-end"></div>
                        </div>
                        <div className="search__dropdown search__dropdown--suggestions suggestions">
                           <div className="suggestions__group">
                              <div className="suggestions__group-title">Products</div>
                              <div className="suggestions__group-content">
                                 <a className="suggestions__item suggestions__product" href="">
                                    <div className="suggestions__product-image image image--type--product">
                                       <div className="image__body">
                                          {/* <img className="image__tag" src={product1} alt="" /> */}

                                       </div>
                                    </div>
                                    <div className="suggestions__product-info">
                                       <div className="suggestions__product-name">Brandix Brake Kit BDX-750Z370-S</div>
                                       <div className="suggestions__product-rating">
                                          <div className="suggestions__product-rating-stars">
                                             <div className="rating">
                                                <div className="rating__body">
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="suggestions__product-rating-label">5 on 22 reviews</div>
                                       </div>
                                    </div>
                                    <div className="suggestions__product-price">$224.00</div>
                                 </a>
                                 <a className="suggestions__item suggestions__product" href="">
                                    <div className="suggestions__product-image image image--type--product">
                                       <div className="image__body">
                                          {/* <img className="image__tag" src="images/products/product-3-40x40.jpg" alt=""> */}

                                       </div>
                                    </div>
                                    <div className="suggestions__product-info">
                                       <div className="suggestions__product-name">Left Headlight Of Brandix Z54</div>
                                       <div className="suggestions__product-rating">
                                          <div className="suggestions__product-rating-stars">
                                             <div className="rating">
                                                <div className="rating__body">
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star"></div>
                                                   <div className="rating__star"></div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="suggestions__product-rating-label">3 on 14 reviews</div>
                                       </div>
                                    </div>
                                    <div className="suggestions__product-price">$349.00</div>
                                 </a>
                                 <a className="suggestions__item suggestions__product" href="">
                                    <div className="suggestions__product-image image image--type--product">
                                       <div className="image__body">
                                          {/* <img className="image__tag" src="images/products/product-4-40x40.jpg" alt=""> */}

                                       </div>
                                    </div>
                                    <div className="suggestions__product-info">
                                       <div className="suggestions__product-name">Glossy Gray 19" Aluminium Wheel AR-19</div>
                                       <div className="suggestions__product-rating">
                                          <div className="suggestions__product-rating-stars">
                                             <div className="rating">
                                                <div className="rating__body">
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star rating__star--active"></div>
                                                   <div className="rating__star"></div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="suggestions__product-rating-label">4 on 26 reviews</div>
                                       </div>
                                    </div>
                                    <div className="suggestions__product-price">$589.00</div>
                                 </a>
                              </div>
                           </div>
                           <div className="suggestions__group">
                              <div className="suggestions__group-title">Categories</div>
                              <div className="suggestions__group-content"><a className="suggestions__item suggestions__category" href="">Headlights &amp; Lighting</a> <a className="suggestions__item suggestions__category" href="">Fuel System &amp; Filters</a> <a className="suggestions__item suggestions__category" href="">Body Parts &amp; Mirrors</a> <a className="suggestions__item suggestions__category" href="">Interior Accessories</a></div>
                           </div>
                        </div>
                        <div className="search__dropdown search__dropdown--vehicle-picker vehicle-picker">
                           <div className="search__dropdown-arrow"></div>
                           <div className="vehicle-picker__panel vehicle-picker__panel--list vehicle-picker__panel--active" data-panel="list">
                              <div className="vehicle-picker__panel-body">
                                 <div className="vehicle-picker__text">Select a vehicle to find exact fit parts</div>
                                 <div className="vehicles-list">
                                    <div className="vehicles-list__body">
                                       <label className="vehicles-list__item">
                                          <span className="vehicles-list__item-radio input-radio"><span className="input-radio__body">
                                             {/* <input className="input-radio__input" name="header-vehicle" type="radio">  */}
                                             <span className="input-radio__circle"></span> </span></span><span className="vehicles-list__item-info"><span className="vehicles-list__item-name">2011 Ford Focus S</span> <span className="vehicles-list__item-details">Engine 2.0L 1742DA L4 FI Turbo</span> </span>
                                          <button type="button" className="vehicles-list__item-remove">
                                             <svg width="16" height="16">
                                                <path d="M2,4V2h3V1h6v1h3v2H2z M13,13c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5h10V13z"></path>
                                             </svg>
                                          </button>
                                       </label>
                                       <label className="vehicles-list__item">
                                          <span className="vehicles-list__item-radio input-radio"><span className="input-radio__body">
                                             {/* <input className="input-radio__input" name="header-vehicle" type="radio">  */}
                                             <span className="input-radio__circle"></span> </span></span><span className="vehicles-list__item-info"><span className="vehicles-list__item-name">2019 Audi Q7 Premium</span> <span className="vehicles-list__item-details">Engine 3.0L 5626CC L6 QK</span> </span>
                                          <button type="button" className="vehicles-list__item-remove">
                                             <svg width="16" height="16">
                                                <path d="M2,4V2h3V1h6v1h3v2H2z M13,13c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5h10V13z"></path>
                                             </svg>
                                          </button>
                                       </label>
                                    </div>
                                 </div>
                                 <div className="vehicle-picker__actions"><button type="button" className="btn btn-primary btn-sm" data-to-panel="form">Add A Vehicle</button></div>
                              </div>
                           </div>
                           <div className="vehicle-picker__panel vehicle-picker__panel--form" data-panel="form">
                              <div className="vehicle-picker__panel-body">
                                 <div className="vehicle-form vehicle-form--layout--search">
                                    <div className="vehicle-form__item vehicle-form__item--select">
                                       <select className="form-control form-control-select2 select2-hidden-accessible" aria-label="Year" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                          <option value="none" data-select2-id="3">Select Year</option>
                                          <option>2010</option>
                                          <option>2011</option>
                                          <option>2012</option>
                                          <option>2013</option>
                                          <option>2014</option>
                                          <option>2015</option>
                                          <option>2016</option>
                                          <option>2017</option>
                                          <option>2018</option>
                                          <option>2019</option>
                                          <option>2020</option>
                                       </select>
                                       <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-8z7n-container"><span className="select2-selection__rendered" id="select2-8z7n-container" role="textbox" aria-readonly="true" title="Select Year">Select Year</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                    <div className="vehicle-form__item vehicle-form__item--select">
                                       <select className="form-control form-control-select2 select2-hidden-accessible" aria-label="Brand" disabled="" data-select2-id="4" tabindex="-1" aria-hidden="true">
                                          <option value="none" data-select2-id="6">Select Brand</option>
                                          <option>Audi</option>
                                          <option>BMW</option>
                                          <option>Ferrari</option>
                                          <option>Ford</option>
                                          <option>KIA</option>
                                          <option>Nissan</option>
                                          <option>Tesla</option>
                                          <option>Toyota</option>
                                       </select>
                                       <span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="5"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-34k4-container"><span className="select2-selection__rendered" id="select2-34k4-container" role="textbox" aria-readonly="true" title="Select Brand">Select Brand</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                    <div className="vehicle-form__item vehicle-form__item--select">
                                       <select className="form-control form-control-select2 select2-hidden-accessible" aria-label="Model" disabled="" data-select2-id="7" tabindex="-1" aria-hidden="true">
                                          <option value="none" data-select2-id="9">Select Model</option>
                                          <option>Explorer</option>
                                          <option>Focus S</option>
                                          <option>Fusion SE</option>
                                          <option>Mustang</option>
                                       </select>
                                       <span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="8"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-m2ww-container"><span className="select2-selection__rendered" id="select2-m2ww-container" role="textbox" aria-readonly="true" title="Select Model">Select Model</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                    <div className="vehicle-form__item vehicle-form__item--select">
                                       <select className="form-control form-control-select2 select2-hidden-accessible" aria-label="Engine" disabled="" data-select2-id="10" tabindex="-1" aria-hidden="true">
                                          <option value="none" data-select2-id="12">Select Engine</option>
                                          <option>Gas 1.6L 125 hp AT/L4</option>
                                          <option>Diesel 2.5L 200 hp AT/L5</option>
                                          <option>Diesel 3.0L 250 hp MT/L5</option>
                                       </select>
                                       <span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="11"><span className="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-1vow-container"><span class="select2-selection__rendered" id="select2-1vow-container" role="textbox" aria-readonly="true" title="Select Engine">Select Engine</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                    <div className="vehicle-form__divider">Or</div>
                                    <div className="vehicle-form__item">
                                       {/* <input type="text" class="form-control" placeholder="Enter VIN number" aria-label="VIN number"> */}

                                    </div>
                                 </div>
                                 <div className="vehicle-picker__actions">
                                    <div className="search__car-selector-link"><a href="" data-to-panel="list">Back to vehicles list</a></div>
                                    <button type="button" className="btn btn-primary btn-sm" disabled="disabled">Add A Vehicle</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="header__indicators">
                  <div className="indicator">
                     <a href="wishlist.html" className="indicator__button">
                        <span className="indicator__icon">
                           <svg width="32" height="32">
                              <path d="M23,4c3.9,0,7,3.1,7,7c0,6.3-11.4,15.9-14,16.9C13.4,26.9,2,17.3,2,11c0-3.9,3.1-7,7-7c2.1,0,4.1,1,5.4,2.6l1.6,2l1.6-2
                              C18.9,5,20.9,4,23,4 M23,2c-2.8,0-5.4,1.3-7,3.4C14.4,3.3,11.8,2,9,2c-5,0-9,4-9,9c0,8,14,19,16,19s16-11,16-19C32,6,28,2,23,2L23,2
                              z"></path>
                           </svg>
                        </span>
                     </a>
                  </div>
                  <div className="indicator indicator--trigger--click">
                     <a href="account-login.html" className="indicator__button">
                        <span className="indicator__icon">
                           <svg width="32" height="32">
                              <path d="M16,18C9.4,18,4,23.4,4,30H2c0-6.2,4-11.5,9.6-13.3C9.4,15.3,8,12.8,8,10c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.8-1.5,5.3-3.6,6.7
                              C26,18.5,30,23.8,30,30h-2C28,23.4,22.6,18,16,18z M22,10c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S22,13.3,22,10z"></path>
                           </svg>
                        </span>
                        <span className="indicator__title">Hello, Log In</span> <span className="indicator__value">My Account</span>
                     </a>
                     <div className="indicator__content">
                        <div className="account-menu">
                           <form className="account-menu__form">
                              <div className="account-menu__form-title">Log In to Your Account</div>
                              <div className="form-group"><label for="header-signin-email" className="sr-only">Email address</label>
                                 {/* <input id="header-signin-email" type="email" className="form-control form-control-sm" placeholder="Email address"> */}

                              </div>
                              <div className="form-group">
                                 <label for="header-signin-password" className="sr-only">Password</label>
                                 <div className="account-menu__form-forgot">
                                    {/* <input id="header-signin-password" type="password" className="form-control form-control-sm" placeholder="Password">  */}
                                    <a href="" className="account-menu__form-forgot-link">Forgot?</a></div>
                              </div>
                              <div className="form-group account-menu__form-button"><button type="submit" className="btn btn-primary btn-sm">Login</button></div>
                              <div className="account-menu__form-link"><a href="account-login.html">Create An Account</a></div>
                           </form>
                           <div className="account-menu__divider"></div>
                           <a href="" className="account-menu__user">
                              <div className="account-menu__user-avatar">
                                 {/* <img src="images/avatars/avatar-4.jpg" alt=""> */}

                              </div>
                              <div className="account-menu__user-info">
                                 <div className="account-menu__user-name">UI TO UX</div>
                                 <div className="account-menu__user-email">uitoux@example.com</div>
                              </div>
                           </a>
                           <div className="account-menu__divider"></div>
                           <ul className="account-menu__links">
                              <li><a href="account-dashboard.html">Dashboard</a></li>
                              <li><a href="account-dashboard.html">Garage</a></li>
                              <li><a href="account-profile.html">Edit Profile</a></li>
                              <li><a href="account-orders.html">Order History</a></li>
                              <li><a href="account-addresses.html">Addresses</a></li>
                           </ul>
                           <div className="account-menu__divider"></div>
                           <ul className="account-menu__links">
                              <li><a href="account-login.html">Logout</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="indicator indicator--trigger--click">
                     <a href="cart.html" className="indicator__button">
                        <span className="indicator__icon">
                           <svg width="32" height="32">
                              <circle cx="10.5" cy="27.5" r="2.5"></circle>
                              <circle cx="23.5" cy="27.5" r="2.5"></circle>
                              <path d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
                              l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
                              c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"></path>
                           </svg>
                           <span className="indicator__counter">3</span>
                        </span>
                        <span className="indicator__title">Shopping Cart</span> <span className="indicator__value">$250.00</span>
                     </a>
                     <div className="indicator__content">
                        <div className="dropcart">
                           <ul className="dropcart__list">
                              <li className="dropcart__item">
                                 <div className="dropcart__item-image image image--type--product"><a className="image__body" href="product-full.html">
                                    {/* <img className="image__tag" src="images/products/product-4-70x70.jpg" alt=""> */}
                                 </a></div>
                                 <div className="dropcart__item-info">
                                    <div className="dropcart__item-name"><a href="product-full.html">Glossy Gray 19" Aluminium Wheel AR-19</a></div>
                                    <ul className="dropcart__item-features">
                                       <li>Color: Yellow</li>
                                       <li>Material: Aluminium</li>
                                    </ul>
                                    <div className="dropcart__item-meta">
                                       <div className="dropcart__item-quantity">2</div>
                                       <div className="dropcart__item-price">$699.00</div>
                                    </div>
                                 </div>
                                 <button type="button" className="dropcart__item-remove">
                                    <svg width="10" height="10">
                                       <path d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
                                       c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
                                       C9.2,7.8,9.2,8.4,8.8,8.8z"></path>
                                    </svg>
                                 </button>
                              </li>
                              <li className="dropcart__divider" role="presentation"></li>
                              <li className="dropcart__item">
                                 <div className="dropcart__item-image image image--type--product"><a className="image__body" href="product-full.html">
                                    {/* <img className="image__tag" src="images/products/product-2-70x70.jpg" alt=""> */}
                                 </a></div>
                                 <div className="dropcart__item-info">
                                    <div className="dropcart__item-name"><a href="product-full.html">Brandix Brake Kit BDX-750Z370-S</a></div>
                                    <div className="dropcart__item-meta">
                                       <div className="dropcart__item-quantity">1</div>
                                       <div className="dropcart__item-price">$849.00</div>
                                    </div>
                                 </div>
                                 <button type="button" className="dropcart__item-remove">
                                    <svg width="10" height="10">
                                       <path d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
                                       c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
                                       C9.2,7.8,9.2,8.4,8.8,8.8z"></path>
                                    </svg>
                                 </button>
                              </li>
                              <li className="dropcart__divider" role="presentation"></li>
                              <li className="dropcart__item">
                                 <div className="dropcart__item-image image image--type--product"><a className="image__body" href="product-full.html">
                                    {/* <img className="image__tag" src="images/products/product-5-70x70.jpg" alt=""> */}
                                 </a></div>
                                 <div className="dropcart__item-info">
                                    <div className="dropcart__item-name"><a href="product-full.html">Twin Exhaust Pipe From Brandix Z54</a></div>
                                    <ul className="dropcart__item-features">
                                       <li>Color: True Red</li>
                                    </ul>
                                    <div className="dropcart__item-meta">
                                       <div className="dropcart__item-quantity">3</div>
                                       <div className="dropcart__item-price">$1210.00</div>
                                    </div>
                                 </div>
                                 <button type="button" className="dropcart__item-remove">
                                    <svg width="10" height="10">
                                       <path d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
                                       c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
                                       C9.2,7.8,9.2,8.4,8.8,8.8z"></path>
                                    </svg>
                                 </button>
                              </li>
                              <li className="dropcart__divider" role="presentation"></li>
                           </ul>
                           <div className="dropcart__totals">
                              <table>
                                 <tbody>
                                    <tr>
                                       <th>Subtotal</th>
                                       <td>$5877.00</td>
                                    </tr>
                                    <tr>
                                       <th>Shipping</th>
                                       <td>$25.00</td>
                                    </tr>
                                    <tr>
                                       <th>Tax</th>
                                       <td>$0.00</td>
                                    </tr>
                                    <tr>
                                       <th>Total</th>
                                       <td>$5902.00</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           <div className="dropcart__actions"><a href="cart.html" className="btn btn-secondary">View Cart</a> <a href="checkout.html" class="btn btn-primary">Checkout</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <div className="site__body">
            <div className="block-space block-space--layout--divider-xs"></div>

            <div className="block block-slideshow">
               <div className="container">
                  <div className="block-slideshow__carousel">
                     <div className="owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                           <div className="owl-stage" style={{ transition: " all 0s ease 0s", width: "6510px" }}>
                              <div className="owl-item cloned" style={{ width: "930px" }}><a className="block-slideshow__item" href=""><span className="block-slideshow__item-image block-slideshow__item-image--desktop" ><img src={slide} alt="Img" /></span> <span className="block-slideshow__item-image block-slideshow__item-image--mobile"></span> <span className="block-slideshow__item-title">Not enough spare parts? </span><span className="block-slideshow__item-details">We have everything you need – replacement parts, performance parts, accessories, oil &amp; fluids, tools and much more... </span><span className="block-slideshow__item-button">Shop Now </span></a></div>
                              <div className="owl-item cloned" style={{ width: "930px" }}><a className="block-slideshow__item" href=""><span className="block-slideshow__item-image block-slideshow__item-image--desktop" ></span> <span className="block-slideshow__item-image block-slideshow__item-image--mobile" >30% OFF </span><span className="block-slideshow__item-title">When Buying Parts With Installation </span><span className="block-slideshow__item-details">Installation of parts in the services of our partners. </span><span className="block-slideshow__item-button">Shop Now </span></a></div>
                              <div className="owl-item" style={{ width: "930px" }}><a className="block-slideshow__item" href=""><span className="block-slideshow__item-image block-slideshow__item-image--desktop" ></span> <span className="block-slideshow__item-image block-slideshow__item-image--mobile" ></span> <span className="block-slideshow__item-title">Not enough spare parts? </span><span className="block-slideshow__item-details">We have everything you need – replacement parts,performance parts, accessories, oil &amp; fluids,tools and much more... </span><span className="block-slideshow__item-button">Shop Now </span></a></div>
                              <div className="owl-item" style={{ width: "930px" }}><a className="block-slideshow__item" href=""><span className="block-slideshow__item-image block-slideshow__item-image--desktop" ></span> <span className="block-slideshow__item-image block-slideshow__item-image--mobile"  ></span> <span className="block-slideshow__item-offer">30% OFF </span><span className="block-slideshow__item-title">Big Choice Of Wheel Tires </span><span className="block-slideshow__item-details">Any size and diameter, with or without spikes,summer or winter, rain or snow. </span><span className="block-slideshow__item-button">Shop Now</span></a></div>
                              <div className="owl-item cloned" style={{ width: "930px" }}><a className="block-slideshow__item" href="">
                                 <span className="block-slideshow__item-image block-slideshow__item-image--desktop" ></span> <span className="block-slideshow__item-image block-slideshow__item-image--mobile" ></span> <span className="block-slideshow__item-offer">30% OFF </span><span className="block-slideshow__item-title">When Buying Parts With Installation </span><span className="block-slideshow__item-details">Installation of parts in the services of our partners. </span><span className="block-slideshow__item-button">Shop Now </span></a></div>
                              <div className="owl-item cloned" style={{ width: "930px" }}>
                                 <a className="block-slideshow__item" href="">
                                    <span className="block-slideshow__item-image block-slideshow__item-image--desktop" ></span>
                                    <span className="block-slideshow__item-image block-slideshow__item-image--mobile"  ></span>
                                    <span className="block-slideshow__item-title">Not enough spare parts? </span>
                                    <span className="block-slideshow__item-details">We have everything you need – replacement parts,performance parts, accessories, oil &amp; fluids,tools and much more... </span><span className="block-slideshow__item-button">Shop Now </span></a></div>
                           </div>
                        </div>
                        <div className="owl-nav disabled">
                           <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
                        </div>
                        <div className="owl-dots">
                           <button role="button" className="owl-dot active">
                              <span></span>
                           </button>
                           <button role="button" class="owl-dot"><span></span>
                           </button>
                           <button role="button" class="owl-dot"><span></span></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Feautured Menu Products */}
            <div className="block-space block-space--layout--divider-nl"></div>
            <div className="block block-products-carousel" data-layout="grid-5">
               <div className="container">
                  <div className="section-header">
                     <div className="section-header__body">
                        <h2 className="section-header__title">Featured Products</h2>
                        <div className="section-header__spring"></div>
                        <ul className="section-header__groups">
                           <li className="section-header__groups-item"><button type="button" className="section-header__groups-button section-header__groups-button--active">All</button></li>
                           <li className="section-header__groups-item"><button type="button" className="section-header__groups-button">Power Tools</button></li>
                           <li className="section-header__groups-item"><button type="button" className="section-header__groups-button">Hand Tools</button></li>
                           <li className="section-header__groups-item"><button type="button" className="section-header__groups-button">Plumbing</button></li>
                        </ul>
                        <div className="section-header__arrows">
                           <div className="arrow section-header__arrow section-header__arrow--prev arrow--prev">
                              <button className="arrow__button" type="button">
                                 <svg width="7" height="11">
                                    <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z"></path>
                                 </svg>
                              </button>
                           </div>
                           <div className="arrow section-header__arrow section-header__arrow--next arrow--next">
                              <button className="arrow__button" type="button">
                                 <svg width="7" height="11">
                                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                       C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                 </svg>
                              </button>
                           </div>
                        </div>
                        <div className="section-header__divider"></div>
                     </div>
                  </div>
               </div>

            </div>

            {/* Product Listing */}
            {/* {productList.map(product =>  */}

            <div className="block-products-carousel__carousel">
               <div className="block-products-carousel__carousel-loader"></div>
               <div className="owl-carousel owl-loaded owl-drag">
                  <div className="owl-carousel owl-loaded owl-drag">

                     <div className="owl-stage-outer">

                        <div className="owl-stage" style={{ transition: "all 0s ease 0s", width: "4730px" }}>
                           <div className="owl-item cloned" style={{ width: "220.5px", marginRight: "16px" }}>
                              <div className="block-products-carousel__column">

                                 <div className="block-products-carousel__cell">
                                    {productList.map(product =>
                                       <div className="product-card product-card--layout--grid">
                                          <div className="product-card__actions-list">
                                             <button className="product-card__action product-card__action--quickview" type="button" aria-label="Quick view">
                                                <svg width="16" height="16">
                                                   <path d="M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z
                                                      M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z"></path>
                                                </svg>
                                             </button>
                                             <button className="product-card__action product-card__action--wishlist" type="button" aria-label="Add to wish list">
                                                <svg width="16" height="16">
                                                   <path d="M13.9,8.4l-5.4,5.4c-0.3,0.3-0.7,0.3-1,0L2.1,8.4c-1.5-1.5-1.5-3.8,0-5.3C2.8,2.4,3.8,2,4.8,2s1.9,0.4,2.6,1.1L8,3.7
                                                      l0.6-0.6C9.3,2.4,10.3,2,11.3,2c1,0,1.9,0.4,2.6,1.1C15.4,4.6,15.4,6.9,13.9,8.4z"></path>
                                                </svg>
                                             </button>
                                             <button className="product-card__action product-card__action--compare" type="button" aria-label="Add to compare">
                                                <svg width="16" height="16">
                                                   <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z"></path>
                                                   <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z"></path>
                                                   <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z"></path>
                                                </svg>
                                             </button>
                                          </div>
                                          <div className="product-card__image">
                                             <div className="image image--type--product"><a href="#" className="image__body"><img className="image__tag" src={product.productImg} alt="" /></a></div>
                                             <div className="status-badge status-badge--style--success product-card__fit status-badge--has-icon status-badge--has-text">
                                                <div className="status-badge__body">
                                                   <div className="status-badge__icon">
                                                      <svg width="13" height="13">
                                                         <path d="M12,4.4L5.5,11L1,6.5l1.4-1.4l3.1,3.1L10.6,3L12,4.4z"></path>
                                                      </svg>
                                                   </div>
                                                   <div className="status-badge__text">Part Fit for 2011 Ford Focus S</div>
                                                   <div className="status-badge__tooltip" tabindex="0" data-toggle="tooltip" title="" data-original-title="Part Fit for 2011 Ford Focus S"></div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="product-card__info">
                                             <div className="product-card__meta"><span className="product-card__meta-title">SKU:</span> {(product) ? product.sku : '573-49386-C'}</div>
                                             <div className="product-card__name">
                                                <div><a href="product-full.html">{(product) ? product.productName : 'Motor Oil Level 5'}</a></div>
                                             </div>
                                             <div className="product-card__rating">
                                                <div className="rating product-card__rating-stars">
                                                   <div className="rating__body">
                                                      <div className="rating__star rating__star--active"></div>
                                                      <div className="rating__star rating__star--active"></div>
                                                      <div className="rating__star rating__star--active"></div>
                                                      <div className="rating__star rating__star--active"></div>
                                                      <div className="rating__star rating__star--active"></div>
                                                   </div>
                                                </div>
                                                <div className="product-card__rating-label">5 on 2 reviews</div>
                                             </div>
                                          </div>

                                          <div className="product-card__footer">
                                             <div className="product-card__prices">
                                                <div className="product-card__price product-card__price--current">${(product) ? product.productAmount : '0.00'}</div>
                                             </div>
                                             <button className="product-card__addtocart-icon" type="button" aria-label="Add to cart">
                                                <svg width="20" height="20">
                                                   <circle cx="7" cy="17" r="2"></circle>
                                                   <circle cx="15" cy="17" r="2"></circle>
                                                   <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                      V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                      C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                </svg>
                                             </button>
                                          </div>
                                       </div>
                                    )}
                                 </div>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* )} */}



            {/* Footer */}

            <footer className="site__footer">
               <div className="site-footer">
                  <div className="decor site-footer__decor decor--type--bottom">
                     <div className="decor__body">
                        <div className="decor__start"></div>
                        <div className="decor__end"></div>
                        <div className="decor__center"></div>
                     </div>
                  </div>
                  <div className="site-footer__widgets">
                     <div className="container">
                        <div className="row">
                           <div className="col-12 col-xl-4">
                              <div className="site-footer__widget footer-contacts">
                                 <h5 className="footer-contacts__title">Contact Us</h5>
                                 <div className="footer-contacts__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.</div>
                                 <address className="footer-contacts__contacts">
                                    <dl>
                                       <dt>Phone Number</dt>
                                       <dd>+1 (800) 060-07-30</dd>
                                    </dl>
                                    <dl>
                                       <dt>Email Address</dt>
                                       <dd>ui-to-ux@example.com</dd>
                                    </dl>
                                    <dl>
                                       <dt>Our Location</dt>
                                       <dd>102, Athipalayam Rd, Ramakrishnapuram, Chinnavedampatti, Coimbatore, Tamil Nadu 641049</dd>
                                    </dl>
                                    <dl>
                                       <dt>Working Hours</dt>
                                       <dd>Mon-Sat 10:00pm - 7:00pm</dd>
                                    </dl>
                                 </address>
                              </div>
                           </div>
                           <div className="col-6 col-md-3 col-xl-2">
                              <div className="site-footer__widget footer-links">
                                 <h5 className="footer-links__title">Information</h5>
                                 <ul className="footer-links__list">
                                    <li className="footer-links__item"><a href="" className="footer-links__link">About Us</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Delivery Information</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Privacy Policy</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Brands</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Contact Us</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Returns</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Site Map</a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-6 col-md-3 col-xl-2">
                              <div className="site-footer__widget footer-links">
                                 <h5 className="footer-links__title">My Account</h5>
                                 <ul className="footer-links__list">
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Store Location</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Order History</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Wish List</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Newsletter</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Specials</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Gift Certificates</a></li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Affiliate</a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-12 col-md-6 col-xl-4">
                              <div className="site-footer__widget footer-newsletter">
                                 <h5 className="footer-newsletter__title">Newsletter</h5>
                                 <div className="footer-newsletter__text">Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</div>
                                 <form action="" className="footer-newsletter__form"><label className="sr-only" for="footer-newsletter-address">Email Address</label>
                                    {/* <input type="text" className="footer-newsletter__form-input" id="footer-newsletter-address" placeholder="Email Address...">  */}
                                    <button className="footer-newsletter__form-button">Subscribe</button></form>
                                 <div className="footer-newsletter__text footer-newsletter__text--social">Follow us on social networks</div>
                                 <div className="footer-newsletter__social-links social-links">
                                    <ul className="social-links__list">
                                       <li className="social-links__item social-links__item--facebook"><a href="https://themeforest.net/user/kos9" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                       <li className="social-links__item social-links__item--twitter"><a href="https://themeforest.net/user/kos9" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                       <li className="social-links__item social-links__item--youtube"><a href="https://themeforest.net/user/kos9" target="_blank"><i className="fab fa-youtube"></i></a></li>
                                       <li className="social-links__item social-links__item--instagram"><a href="https://themeforest.net/user/kos9" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                       <li className="social-links__item social-links__item--rss"><a href="https://themeforest.net/user/kos9" target="_blank"><i className="fas fa-rss"></i></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="site-footer__bottom">
                     <div className="container">
                        <div className="site-footer__bottom-row">
                           <div className="site-footer__copyright">
                              Powered by www://uitouxsolutions.com — Designed by <a href="#" target="_blank"></a>
                           </div>
                           <div className="site-footer__payments">
                              {/* <img src="images/payments.png" alt=""> */}

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </div>
      </div>
   );
}

export default Dashboard;
