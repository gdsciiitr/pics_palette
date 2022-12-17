import React from "react";
import "./home.css"
import logo from "../../assets/images/logo.png"

const home = () => {
  return (
    <div>
      <>
        {/* ***** Preloader Start ***** */}
        {/* <div id="js-preloader" className="js-preloader">
          <div className="preloader-inner">
            <span className="dot" />
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div> */}
        {/* ***** Preloader End ***** */}
        {/* ***** Header Area Start ***** */}
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="index.html" className="logo">
                    <img src={logo} alt="" />
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li>
                      <a href="index.html" className="active">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="explore.html">Explore</a>
                    </li>
                    <li>
                      <a href="details.html">Item Details</a>
                    </li>
                    <li>
                      <a href="author.html">Author</a>
                    </li>
                    <li>
                      <a href="create.html">Create Yours</a>
                    </li>
                  </ul>
                  <a href="/" className="menu-trigger">
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}
        {/* ***** Main Banner Area Start ***** */}
        <div className="main-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="header-text">
                  <h6>Liberty NFT Market</h6>
                  <h2>Create, Sell &amp; Collect Top NFT’s.</h2>
                  <p>
                    Liberty NFT Market is a really cool and professional design
                    for your NFT websites. This HTML CSS template is based on
                    Bootstrap v5 and it is designed for NFT related web portals.
                    Liberty can be freely downloaded from TemplateMo's free css
                    templates.
                  </p>
                  <div className="buttons">
                    <div className="border-button">
                      <a href="explore.html">Explore Top NFTs</a>
                    </div>
                    <div className="main-button">
                      <a href="/" target="_blank">
                        Watch Our Videos
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="owl-banner owl-carousel">
                  <div className="item">
                    <img src="../../assets/images/banner-01.png" alt="" />
                  </div>
                  <div className="item">
                    <img src="../../assets/images/banner-02.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Main Banner Area End ***** */}
        <div className="categories-collections">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="categories">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <div className="line-dec" />
                        <h2>
                          Browse Through Our <em>Categories</em> Here.
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="item">
                        <div className="icon">
                          <img src="../../assets/images/icon-01.png" alt="" />
                        </div>
                        <h4>Blockchain</h4>
                        <div className="icon-button">
                          <a href="/">
                            <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="item">
                        <div className="icon">
                          <img src="../../assets/images/icon-02.png" alt="" />
                        </div>
                        <h4>Digital Art</h4>
                        <div className="icon-button">
                          <a href="/">
                            <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="item">
                        <div className="icon">
                          <img src="../../assets/images/icon-03.png" alt="" />
                        </div>
                        <h4>Music Art</h4>
                        <div className="icon-button">
                          <a href="/">
                            <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="item">
                        <div className="icon">
                          <img src="../../assets/images/icon-04.png" alt="" />
                        </div>
                        <h4>Virtual World</h4>
                        <div className="icon-button">
                          <a href="/">
                            <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="item">
                        <div className="icon">
                          <img src="../../assets/images/icon-05.png" alt="" />
                        </div>
                        <h4>Valuable</h4>
                        <div className="icon-button">
                          <a href="/">
                            <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="item">
                        <div className="icon">
                          <img src="../../assets/images/icon-06.png" alt="" />
                        </div>
                        <h4>Triple NFT</h4>
                        <div className="icon-button">
                          <a href="/">
                            <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collections">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <div className="line-dec" />
                        <h2>
                          Explore Some Hot <em>Collections</em> In Market.
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="owl-collection owl-carousel">
                        <div className="item">
                          <img src="../../assets/images/collection-01.jpg" alt="" />
                          <div className="down-content">
                            <h4>Mutant Bored Ape Yacht Club</h4>
                            <span className="collection">
                              Items In Collection:
                              <br />
                              <strong>310/340</strong>
                            </span>
                            <span className="category">
                              Category:
                              <br />
                              <strong>Digital Crypto</strong>
                            </span>
                            <div className="main-button">
                              <a href="explore.html">Explore Mutant</a>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <img src="../../assets/images/collection-01.jpg" alt="" />
                          <div className="down-content">
                            <h4>Bored Ape Kennel Club</h4>
                            <span className="collection">
                              Items In Collection:
                              <br />
                              <strong>324/324</strong>
                            </span>
                            <span className="category">
                              Category:
                              <br />
                              <strong>Visual Art</strong>
                            </span>
                            <div className="main-button">
                              <a href="explore.html">Explore Bored Ape</a>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <img src="../../assets/images/collection-01.jpg" alt="" />
                          <div className="down-content">
                            <h4>Genesis Collective Statue</h4>
                            <span className="collection">
                              Items In Collection:
                              <br />
                              <strong>380/394</strong>
                            </span>
                            <span className="category">
                              Category:
                              <br />
                              <strong>Music Art</strong>
                            </span>
                            <div className="main-button">
                              <a href="explore.html">Explore Genesis</a>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <img src="../../assets/images/collection-01.jpg" alt="" />
                          <div className="down-content">
                            <h4>Worldwide Artwork Ground</h4>
                            <span className="collection">
                              Items In Collection:
                              <br />
                              <strong>426/468</strong>
                            </span>
                            <span className="category">
                              Category:
                              <br />
                              <strong>Blockchain</strong>
                            </span>
                            <div className="main-button">
                              <a href="explore.html">Explore Worldwide</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="create-nft">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h2>Create Your NFT &amp; Put It On The Market.</h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-button">
                  <a href="create.html">Create Your NFT Now</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item first-item">
                  <div className="number">
                    <h6>1</h6>
                  </div>
                  <div className="icon">
                    <img src="../../assets/images/icon-02.png" alt="" />
                  </div>
                  <h4>Set Up Your Wallet</h4>
                  <p>
                    NFT means Non-Fungible Token that are used in digital
                    cryptocurrency markets. There are many different kinds of
                    NFTs in the industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item second-item">
                  <div className="number">
                    <h6>2</h6>
                  </div>
                  <div className="icon">
                    <img src="../../assets/images/icon-04.png" alt="" />
                  </div>
                  <h4>Add Your Digital NFT</h4>
                  <p>
                    There are 5 different HTML pages included in this NFT{" "}
                    <a href="/" target="_blank" rel="nofollow">
                      website template
                    </a>
                    . You can edit or modify any section on any page as you
                    required.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item">
                  <div className="icon">
                    <img src="../../assets/images/icon-06.png" alt="" />
                  </div>
                  <h4>Sell Your NFT &amp; Make Profit</h4>
                  <p>
                    If you would like to support our TemplateMo website, please
                    visit{" "}
                    <a
                      rel="nofollow"
                      href="https://templatemo.com/contact"
                      target="_parent"
                    >
                      our contact page
                    </a>{" "}
                    to make a PayPal contribution. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="currently-market">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading">
                  <div className="line-dec" />
                  <h2>
                    <em>Items</em> Currently In The Market.
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="filters">
                  <ul>
                    <li data-filter="*" className="active">
                      All Items
                    </li>
                    <li data-filter=".msc">Music Art</li>
                    <li data-filter=".dig">Digital Art</li>
                    <li data-filter=".blc">Blockchain</li>
                    <li data-filter=".vtr">Virtual</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row grid">
                  <div className="col-lg-6 currently-market-item all msc">
                    <div className="item">
                      <div className="left-image">
                        <img
                          src="../../assets/images/market-01.jpg"
                          alt=""
                          style={{ borderRadius: 20, minWidth: 195 }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Music Art Super Item</h4>
                        <span className="author">
                          <img
                            src="../../assets/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="/">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Current Bid
                          <br />
                          <strong>2.03 ETH</strong>
                          <br />
                          <em>($8,240.50)</em>
                        </span>
                        <span className="ends">
                          Ends In
                          <br />
                          <strong>4D 08H 15M 42S</strong>
                          <br />
                          <em>(July 24th, 2022)</em>
                        </span>
                        <div className="text-button">
                          <a href="details.html">View Item Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 currently-market-item all dig">
                    <div className="item">
                      <div className="left-image">
                        <img
                          src="../../assets/images/market-01.jpg"
                          alt=""
                          style={{ borderRadius: 20, minWidth: 195 }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Digital Crypto Artwork</h4>
                        <span className="author">
                          <img
                            src="../../assets/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="/">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Current Bid
                          <br />
                          <strong>2.03 ETH</strong>
                          <br />
                          <em>($7,200.50)</em>
                        </span>
                        <span className="ends">
                          Ends In
                          <br />
                          <strong>2D 06H 30M 25S</strong>
                          <br />
                          <em>(July 26th, 2022)</em>
                        </span>
                        <div className="text-button">
                          <a href="details.html">View Item Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 currently-market-item all blc">
                    <div className="item">
                      <div className="left-image">
                        <img
                          src="../../assets/images/market-01.jpg"
                          alt=""
                          style={{ borderRadius: 20, minWidth: 195 }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Blockchain Item One</h4>
                        <span className="author">
                          <img
                            src="../../assets/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="/">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Current Bid
                          <br />
                          <strong>3.64 ETH</strong>
                          <br />
                          <em>($6,600.00)</em>
                        </span>
                        <span className="ends">
                          Ends In
                          <br />
                          <strong>6D 05H 40M 50S</strong>
                          <br />
                          <em>(July 28th, 2022)</em>
                        </span>
                        <div className="text-button">
                          <a href="details.html">View Item Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 currently-market-item all vtr">
                    <div className="item">
                      <div className="left-image">
                        <img
                          src="../../assets/images/market-01.jpg"
                          alt=""
                          style={{ borderRadius: 20, minWidth: 195 }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Virtual Currency Art</h4>
                        <span className="author">
                          <img
                            src="../../assets/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="/">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Current Bid
                          <br />
                          <strong>2.44 ETH</strong>
                          <br />
                          <em>($8,800.50)</em>
                        </span>
                        <span className="ends">
                          Ends In
                          <br />
                          <strong>3D 05H 20M 58S</strong>
                          <br />
                          <em>(July 14th, 2022)</em>
                        </span>
                        <div className="text-button">
                          <a href="details.html">View Item Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 currently-market-item all vrt dig">
                    <div className="item">
                      <div className="left-image">
                        <img
                          src="../../assets/images/market-01.jpg"
                          alt=""
                          style={{ borderRadius: 20, minWidth: 195 }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Digital Art Item</h4>
                        <span className="author">
                          <img
                            src="../../assets/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="/">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Current Bid
                          <br />
                          <strong>2.50 ETH</strong>
                          <br />
                          <em>($8,400.50)</em>
                        </span>
                        <span className="ends">
                          Ends In
                          <br />
                          <strong>4D 08H 32M 18S</strong>
                          <br />
                          <em>(July 16th, 2022)</em>
                        </span>
                        <div className="text-button">
                          <a href="details.html">View Item Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 currently-market-item all msc blc">
                    <div className="item">
                      <div className="left-image">
                        <img
                          src="../../assets/images/market-01.jpg"
                          alt=""
                          style={{ borderRadius: 20, minWidth: 195 }}
                        />
                      </div>
                      <div className="right-content">
                        <h4>Blockchain Music Design</h4>
                        <span className="author">
                          <img
                            src="../../assets/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="/">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Current Bid
                          <br />
                          <strong>2.44 ETH</strong>
                          <br />
                          <em>($8,200.50)</em>
                        </span>
                        <span className="ends">
                          Ends In
                          <br />
                          <strong>5D 10H 22M 24S</strong>
                          <br />
                          <em>(July 18th, 2022)</em>
                        </span>
                        <div className="text-button">
                          <a href="details.html">View Item Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright © 2022 <a href="/">Liberty</a> NFT Marketplace Co.,
                  Ltd. All rights reserved. &nbsp;&nbsp; Designed by{" "}
                  <a
                    title="HTML CSS Templates"
                    rel="sponsored"
                    href="/"
                    target="_blank"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default home;
