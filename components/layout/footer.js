import Link from "next/link";
import React from "react";

const Footer = ({ removeClass }) => {
  return (
    <>
      <footer className="pt-50 pb-20 bg-grey">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-3 col-md-6">
              <div className="sidebar-widget wow fadeInUp animated mb-30">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">About Make it Missoula</h5>
                </div>
                <div className="textwidget">
                  <p>
                    Make it Missoula is your trusted source for local news, culture, and lifestyle insights from the heart of Montana.
                  </p>
                  <p>
                    <strong className="color-black">Address</strong>
                    <br />
                    456 Big Sky Ave
                    <br />
                    Missoula, MT 59801
                  </p>
                  <p>
                    <strong className="color-black">Follow us</strong>
                  </p>
                  <br />
                  <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                    <li className="list-inline-item">
                      <Link href="/#">
                        <a className="fb" target="_blank" title="Facebook">
                          <i className="elegant-icon social_facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/#">
                        <a className="tw" target="_blank" title="Tweet now">
                          <i className="elegant-icon social_twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/#">
                        <a className="pt" target="_blank" title="Pin it">
                          <i className="elegant-icon social_pinterest"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div
                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Quick Links</h5>
                </div>
                <ul className="font-small">
                  <li className="cat-item cat-item-2">
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-5">
                    <Link href="/terms">
                      <a>Terms &amp; Conditions</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-6">
                    <Link href="/refund">
                      <a>Refund Policy</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-7">
                    <Link href="/advertise">
                      <a>Advertise with Us</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-7">
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Tagcloud */}
            <div className="col-lg-3 col-md-6">
              <div
                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Tagcloud</h5>
                </div>
                <div className="tagcloud mt-50">
                  <Link href="/category">
                    <a className="tag-cloud-link">Missoula</a>
                  </Link>
                  <Link href="/category">
                    <a className="tag-cloud-link">Montana</a>
                  </Link>
                  <Link href="/category">
                    <a className="tag-cloud-link">Local</a>
                  </Link>
                  <Link href="/category">
                    <a className="tag-cloud-link">Community</a>
                  </Link>
                  <Link href="/category">
                    <a className="tag-cloud-link">Outdoors</a>
                  </Link>
                  <Link href="/category">
                    <a className="tag-cloud-link">Culture</a>
                  </Link>
                  <Link href="/category">
                    <a className="tag-cloud-link">Events</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Newsletter */}
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                data-wow-delay="0.3s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Newsletter</h5>
                </div>
                <div className="newsletter">
                  <p className="font-medium">
                    Subscribe to Make it Missoula’s newsletter for the latest local news, events, and stories delivered straight to your inbox.
                  </p>
                  <form className="input-group form-subcriber mt-30 d-flex">
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="Enter your email"
                    />
                    <button className="btn bg-primary text-white" type="submit">
                      Subscribe
                    </button>
                    <label className="mt-20">
                      <input
                        className="mr-5"
                        name="name"
                        type="checkbox"
                        value="1"
                        required=""
                      />{" "}
                      I agree to the{" "}
                      <Link href="/terms">
                        <a target="_blank">terms &amp; conditions</a>
                      </Link>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
            <p className="float-md-left font-small text-muted">
              © {new Date().getFullYear()}, Make it Missoula. All rights reserved.
            </p>
            <p className="float-md-right font-small text-muted">
              Design by{" "}
              <Link href="https://mavera.io">
                <a target="_blank">mavera</a>
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <div className="dark-mark" onClick={removeClass}></div>
    </>
  );
};

export default Footer;