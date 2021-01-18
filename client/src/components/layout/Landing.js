import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
                <span className="text-uppercase text-muted small-xl">Merit-Connect</span>
                <h1 className="display-4 mt-2 mb-5">A virtual network for Merit alumni.</h1>
                <LinkContainer to="/register" >
                  <Button className="btn btn-primary d-inline-flex flex-row align-items-center">
                  <em data-feather="share-2" width={20} height={20} className="mr-2" />
                  Sign Up
                  </Button>
                  
                </LinkContainer>
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
                <h2 className="dot-circle">How to secure an internship during COVID-19:</h2>
                <div className="row mt-6">
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="share-2" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Virtual Networking</h5>
                        <span className="text-muted">A major part of getting a leg-up when internship hunting is using your network. Often times, a having good connection vouch for you will put you leaps and bounds ahead of the competition.
</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="linkedin" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">LinkedIn Profiles</h5>
                        <span className="text-muted">Putting together a decent LinkedIn profile isn’t something they teach you in school. During COVID-19, it’s the first place potential employers will look to find out more about you.
</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="linkedin" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">LinkedIn Posts</h5>
                        <span className="text-muted">It’s difficult to tell the world that you’re having difficulties finding a job. However, it’s a struggle many are facing during the pandemic and many more are sympathetic to. The power of having a strong LinkedIn network may surprise you.
</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="box" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Micro-Internships</h5>
                        <span className="text-muted">Throughout the internship hunting process, it’s important to keep learning and building your portfolio. Sites like Fiverr are a great place to find freelance projects that are specially catered to your skillset, and potential talking points for your next interview!
</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="book" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Free Courses</h5>
                        <span className="text-muted">Thousands of courses on LinkedIn Learning are available completely free of cost for students enrolled in full-time studies. Complete a course, post about it, and display it on your profile!
</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-5">
                    <div className="media">
                      <div className="icon-box mt-0 ml-0">
                        <div className="icon-box-inner small-xs text-primary">
                          <span data-feather="star" width={30} height={30} />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5 className="mt-0">Resume Crafting</h5>
                        <span className="text-muted">Nowadays, resumes are filtered through the eyes of artificial intelligence before they even reach the eyes of a human. Make sure you fine-tune it to optimize your chances at getting through the door.
</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mx-auto text-center">
                <h5 className="mb-4">Learn More At Our Free Workshop</h5>
                <a href="#contact" className="btn btn-primary page-scroll">Sign Up</a>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-6" id="about">
          <div className="container">
            <hr className="mt-5" />
            <div className="row my-5">
              <div className="col-md-6 order-2 order-md-1 my-md-auto">
                <h3>Build a profile, connect, and find opportunities.</h3>
                <p className="text-muted lead">
                  Merit Connect is a community for alumni of the Merit Award Bursary Program to build their networks and connect with individuals in their industry. </p>
                  <p className="text-muted lead">
                  Once you've signed up, you can build your own profile, add your skills, and link your relevant social channels for fellow alumni to contact you with opportunities that fit your skillset.
                </p>
                <p className="text-muted lead">
                  You can also post, browse, and share any opportunities you come across with your fellow alumni!
                </p>
                <LinkContainer to="/register">
                  <Button className="btn btn-primary">Join Now</Button>
                </LinkContainer>
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
                <h3>Need help finding an internship?</h3>
                <p className="text-muted lead">
                  The COVID-19 pandemic has proved to be an enormous challenge for employers and job-seekers around the world, but especially so for students. If you'd like to find out how to maximize your chances of landing your next big internship, join us for our <span className="font-weight-bold text-monospace">FREE 1-HOUR WORKSHOP</span> on February 15th, 2021.
                </p>
                <a href="#" className="btn btn-primary">Sign Up</a>
              </div>
            </div>
            <div className="row mt-7">
              <div className="col-md-8 mx-auto slick-users">
                <div className="review text-center">
                  <p className="quote">Merit's generous programs and opportunities have made it possible for me to make the most of my career potential.</p>
                  <div className="mt-4 d-flex flex-row align-items-center justify-content-center">
                    <img src="img/client-alif.png" className="img-review rounded-circle mr-2" alt="Client 1" />
                    <span className="text-muted">Alif Munim, Software Engineering Intern @ IBM</span>
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
                <h2 className="dot-circle">Free 1-Hour Workshop</h2>
                <p className="text-muted lead">Discover new resources and how to maximize your potential.</p>
                <div className="row pricing-table mt-5">
                  <div className="col-sm-5">
                    <ul className="list-unstyled pricing-list">
                      <li>
                        <h5>Online Resources</h5>
                        <p className="text-muted">Discover hidden gems, all available for free online, that will supercharge your job hunt.</p>
                      </li>
                      <li>
                        <h5>Expert Advice</h5>
                        <p className="text-muted">Learn best practices from industry professionals to stand out to recruiters.</p>
                      </li>
                      <li>
                        <h5>Resume Tuning</h5>
                        <p className="text-muted">Take home tips and tricks to craft the perfect resume to make sure you get your foot in the door.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 ml-auto">
                      <img src="img/zoom.jpg" width="100%" style={{ objectFit: "cover"}}/>
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
                        <a href="mailto:info@meritaward.ca">
                        <div className="icon-box">
                          <div className="icon-box-inner small-xs text-primary">
                            <span data-feather="inbox" width={30} height={30} />
                          </div>
                        </div>
                        <h5>Send us an email</h5>
                        <p className="text-muted small-xl">We usually reply within 24 hours.</p>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card">
                      <div className="card-body text-center">
                        <a href="http://meritaward.ca/">
                        <div className="icon-box">
                          <div className="icon-box-inner small-xs text-primary">
                            <span data-feather="message-circle" width={30} height={30} />
                          </div>
                        </div>
                        <h5>Visit our website</h5>
                        <p className="text-muted small-xl">Learn more about the Merit Award Bursary Program.</p>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 mb-5">
                    <h6>Can I join Merit Connect for free?</h6>
                    <p className="text-muted">Yes! Merit Connect is absolutely free of charge. <Link to="/register">Sign up here</Link>.</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>How do I sign up to be a Merit Volunteer?</h6>
                    <p className="text-muted">To find out more about volunteer opportunities with Merit, please contact <a href="mailto:meritawardoperations@gmail.com">Sarah Mariott</a>.</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>How can I join the internship workshop?</h6>
                    <p className="text-muted">The internship workshop begin at 8pm on February 15th. <a href="#">Sign up here</a>!</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>Where can I find more resources?</h6>
                    <p className="text-muted">A resource page is coming soon. Stay tuned!</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>Where can I find out more about Merit?</h6>
                    <p className="text-muted">To find out more about Merit, please visit <a href="http://meritaward.ca/">our website</a>.</p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <h6>How can I be a Merit Sponsor?</h6>
                    <p className="text-muted">We love our sponsors! If you'd like to learn about the sponsorship process, please contact <a href="mailto:meritawardoperations@gmail.com">Sarah Mariott</a>.</p>
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
                © 2021 Merit Award Bursary Program.
              </div>
              <div className="col-md-4 text-center">
                <ul className="list-inline social social-white-alt social-rounded social-sm mb-0">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/meritaward/"><i className="fa fa-facebook" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://ca.linkedin.com/company/merit-award-bursary-program-incorporated"><i className="fa fa-linkedin" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="mailto:meritawardoperations@gmail.com"><i className="fa fa-envelope" /></a>
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
              © 2021 Merit Award Bursary Program - All Rights Reserved
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
                  <iframe className="embed-responsive-item allowfullscreen" src="https://www.youtube.com/embed/EeV25KlZM-E?rel=0&controls=0&showinfo=0" allowFullScreen frameBorder={0} height={415} width="100%">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="scroll-top">
          <i className="fa fa-angle-up" aria-hidden="true" />
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
