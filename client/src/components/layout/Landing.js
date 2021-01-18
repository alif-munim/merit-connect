import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Row, Col, Card, Image, } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SlideShow from "./SlideShow.js";

const Landing = ({ isAuthenticated }) => {

  return (
    <>
    
    <div>
        <section className="py-5 py-md-7" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-md-auto mb-5 mb-md-0 text-center text-md-left">
                <span className="text-uppercase text-muted small-xl">Snap for macOS</span>
                <h1 className="display-4 mt-2 mb-5">The fastest way to create an amazing video game.</h1>
                <a href="#" className="btn btn-primary d-inline-flex flex-row align-items-center">
                  <em data-feather="shopping-bag" width={20} height={20} className="mr-2" />
                  Buy now for $49
                </a>
                <a href="#" className="btn btn-secondary d-md-inline-flex flex-row align-items-center d-none show-video">
                  <em data-feather="play" width={20} height={20} className="mr-2" />
                  Watch video
                </a>
              </div>
              <div className="col-md-6 play-wrapper">
                <img src="img/macbook.png" className="img-fluid d-block mx-auto" alt="MacBook" />
                <div className="play d-flex flex-row align-item-center show-video">
                  <em className="icon" data-feather="play" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-6" id="features">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <h2 className="dot-circle">There are enough reasons to use Snap.</h2>
                <div className="row mt-6">
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="layers" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Unlimited games</h5>
                        <span className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="zap" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Fast development</h5>
                        <span className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="users" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Teams</h5>
                        <span className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="command" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Global hotkeys</h5>
                        <span className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="droplet" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Color schemes</h5>
                        <span className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="headphones" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">24/7 supports</h5>
                        <span className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mx-auto text-center">
                <h5 className="mb-4">Have questions?</h5>
                <a href="#contact" className="btn btn-primary page-scroll">Contact us</a>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-6" id="about">
          <div className="container">
            <hr className="mt-5" />
            <div className="row my-5">
              <div className="col-md-6 order-2 order-md-1 my-md-auto">
                <h3>The ultimate video game maker.</h3>
                <p className="text-muted lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ante posuere, vestibulum mauris eget, efficitur felis. Vestibulum tincidunt sit amet odio at gravida. Cras mollis dapibus orci, in interdum odio scelerisque rhoncus.
                </p>
                <a href="#" className="btn btn-primary">Learn more</a>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <img src="img/imac.png" className="img-fluid d-block mx-auto" alt="iMac" />
              </div>
            </div>
            <div className="row mt-7">
              <div className="col-md-6">
                <img src="img/macbook.png" className="img-fluid d-block mx-auto" alt="MacBook" />
              </div>
              <div className="col-md-6 my-md-auto">
                <h3>Trusted by the best video game makers.</h3>
                <p className="text-muted lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ante posuere, vestibulum mauris eget, efficitur felis. Vestibulum tincidunt sit amet odio at gravida. Cras mollis dapibus orci, in interdum odio scelerisque rhoncus.
                </p>
                <a href="#" className="btn btn-primary">Learn more</a>
              </div>
            </div>
            <div className="row mt-7">
              <div className="col-md-8 mx-auto slick-users">
                <div className="review text-center">
                  <p className="quote">Praesent vulputate dolor velit, in condimentum odio pellentesin condimentum odio pellentesque libero.</p>
                  <div className="mt-4 d-flex flex-row align-items-center justify-content-center">
                    <img src="img/client-1.jpg" className="img-review rounded-circle mr-2" alt="Client 1" />
                    <span className="text-muted">Ryan Siddle, Google Design</span>
                  </div>
                </div>
                <div className="review text-center">
                  <p className="quote">Integer id ante posuere, vestibulum mauris eget, efficitur felis.</p>
                  <div className="mt-4 d-flex flex-row align-items-center justify-content-center">
                    <img src="img/client-2.jpg" className="img-review rounded-circle mr-2" alt="Client 2" />
                    <span className="text-muted">Ameli Mao, VP Facebook</span>
                  </div>
                </div>
                <div className="review text-center">
                  <p className="quote">Praesent vulputate dolor velit, pellentesin condimentum odio pellentesque libero.</p>
                  <div className="mt-4 d-flex flex-row align-items-center justify-content-center">
                    <img src="img/client-3.jpg" className="img-review rounded-circle mr-2" alt="Client 3" />
                    <span className="text-muted">Kathrine Jones, Twitter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" pt-6" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <h2 className="dot-circle">No-nonsense pricing.</h2>
                <p className="text-muted lead">No hidden fees. 100% refund guarantee.</p>
                <div className="row pricing-table mt-5">
                  <div className="col-sm-5">
                    <ul className="list-unstyled pricing-list">
                      <li>
                        <h5>Pay once</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </li>
                      <li>
                        <h5>One plan</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </li>
                      <li>
                        <h5>Unlimited access</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 ml-auto bg-primary">
                    <div className="card">
                      <div className="card-body text-center">
                        <p className="h1 text-white">$59</p>
                        <p className="text-light">One time payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" mt-7" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <h2 className="dot-circle">Need help?</h2>
                <p className="text-muted lead">We'd love to answer your questions.</p>
                <div className="row mt-5 card-contacts">
                  <div className="col-md-6 mb-3">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="icon-box">
                          <div className="icon-box-inner small-xs text-primary">
                            <span data-feather="inbox" width={30} height={30} />
                          </div>
                        </div>
                        <h5>Send us an email</h5>
                        <p className="text-muted small-xl">We usually reply within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="icon-box">
                          <div className="icon-box-inner small-xs text-primary">
                            <span data-feather="message-circle" width={30} height={30} />
                          </div>
                        </div>
                        <h5>Chat with us</h5>
                        <p className="text-muted small-xl">The fastest way to contact us.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 mb-5">
                    <h6>Can I try Snap for free?</h6>
                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>Do you have hidden fees?</h6>
                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>What are the payment methods you accept?</h6>
                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>How often do you release updates?</h6>
                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>What is your refund policy?</h6>
                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>How can I contact you?</h6>
                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-5 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-auto text-center text-md-left">
                ©2019 Snap.
              </div>
              <div className="col-md-4 text-center">
                <ul className="list-inline social social-white-alt social-rounded social-sm mb-0">
                  <li className="list-inline-item">
                    <a href><i className="fa fa-facebook" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href><i className="fa fa-twitter" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href><i className="fa fa-google-plus" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href><i className="fa fa-dribbble" /></a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 text-center text-md-right mb-0">
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#">Privacy</a></li>
                  <li className="list-inline-item"><a href="#">Terms</a></li>
                  <li className="list-inline-item"><a href="#">Affiliates</a></li>
                </ul>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 text-muted text-center small">
                © 2019 Snap - All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
        <section className="video-wrapper">
          <div className="video-close" id="video-close">
            <em data-feather="x" className="icon" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto my-auto">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item allowfullscreen" src="https://www.youtube.com/embed/MGsalg2f9js?rel=0&controls=0&showinfo=0" allowFullScreen frameBorder={0} height={415} width="100%">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="scroll-top">
          <i className="fa fa-angle-up" aria-hidden="true" />
        </div>
        <div className="switcher-wrap">
          <div className="switcher-trigger">
            <span className="fa fa-gear" />
          </div>
          <div className="color-switcher">
            <h6>Color Switcher</h6>
            <ul className="mt-3 clearfix">
              <li className="bg-cyan active" data-color="default" title="Default Cyan" />
              <li className="bg-orange" data-color="orange" title="Orange" />
              <li className="bg-blue" data-color="blue" title="Blue" />
              <li className="bg-red" data-color="red" title="Red" />
              <li className="bg-indigo" data-color="indigo" title="Indigo" />
              <li className="bg-green" data-color="green" title="Green" />
              <li className="bg-black" data-color="black" title="Black" />
              <li className="bg-teal" data-color="teal" title="Teal" />
              <li className="bg-purple" data-color="purple" title="Purple" />
              <li className="bg-pink" data-color="pink" title="Pink" />
            </ul>
            <p>These are just demo colors. You can <b>easily</b> create your own color scheme.</p>
          </div>
        </div>
      </div>

    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
