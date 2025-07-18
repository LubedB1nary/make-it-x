import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/post.json";

function CategoryList() {
  const router = useRouter();
  const { category } = router.query;
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    if (category) {
      fetchProducts();
    }
  }, [category]);

  const fetchProducts = () => {
    const filterItem = data.filter((item) => item.category === category);
    setCatList(filterItem);
  };

  return (
    <>
      <Layout>
        <main>
          {/* <!--archive header--> */}
          <div className="archive-header pt-50">
            <div className="container">
              <h2 className="font-weight-900">{category}</h2>
              <div className="breadcrumb">
                <Link href="/" legacyBehavior>
                  <a rel="nofollow">Home</a>
                </Link>
                <span> / {category}</span>
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
          </div>
          <div className="pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="post-module-3">
                    <div className="loop-list loop-list-style-1">
                      {catList.map((item, i) => (
                        <article
                          key={item.id}
                          className="hover-up-2 transition-normal wow fadeInUp animated"
                        >
                          <div className="row mb-40 list-style-2">
                            <div className="col-md-4">
                              <div className="post-thumb position-relative border-radius-5">
                                <div
                                  className="img-hover-slide border-radius-5 position-relative"
                                  style={{
                                    backgroundImage: `url(/assets/imgs/news/${item.img})`,
                                  }}
                                >
                                  <Link href={`/blog/${item.id}`} legacyBehavior>
                                    <a className="img-link"></a>
                                  </Link>
                                </div>
                                <ul className="social-share">
                                  <li>
                                    <Link href="/#" legacyBehavior>
                                      <a>
                                        <i className="elegant-icon social_share"></i>
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/#" legacyBehavior>
                                      <a
                                        className="fb"
                                        title="Share on Facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i className="elegant-icon social_facebook"></i>
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/#" legacyBehavior>
                                      <a
                                        className="tw"
                                        title="Tweet now"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i className="elegant-icon social_twitter"></i>
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/#" legacyBehavior>
                                      <a
                                        className="pt"
                                        title="Pin it"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i className="elegant-icon social_pinterest"></i>
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-8 align-self-center">
                              <div className="post-content">
                                <div className="entry-meta meta-0 font-small mb-10">
                                  <Link href={`/category/${item.category}`} legacyBehavior>
                                    <a>
                                      <span className="post-cat text-primary">
                                        {item.category}
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                                <h5 className="post-title font-weight-900 mb-20">
                                  <Link href={`/blog/${item.id}`} legacyBehavior>
                                    <a>
                                      {item.title}
                                    </a>
                                  </Link>
                                  <span className="post-format-icon">
                                    <i className="elegant-icon icon_star_alt"></i>
                                  </span>
                                </h5>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">{item.date}</span>
                                  <span className="time-reading has-dot">
                                    {item.readTime} mins read
                                  </span>
                                  <span className="post-by has-dot">{item.views} views</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                  <div className="pagination-area mb-30 wow fadeInUp animated">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-start">
                        <li className="page-item">
                          <Link href="/#" legacyBehavior>
                            <a className="page-link">
                              <i className="elegant-icon arrow_left"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link href="/#" legacyBehavior>
                            <a className="page-link">01</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="/#" legacyBehavior>
                            <a className="page-link">02</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="/#" legacyBehavior>
                            <a className="page-link">03</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="/#" legacyBehavior>
                            <a className="page-link">04</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="/#" legacyBehavior>
                            <a className="page-link">
                              <i className="elegant-icon arrow_right"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="widget-area">
                    <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border wow fadeInUp animated">
                      <img
                        className="about-author-img mb-25"
                        src="/assets/imgs/authors/author.jpg"
                        alt="Carol"
                      />
                      <h5 className="mb-20">Hello, I'm Carol</h5>
                      <p className="font-medium text-muted">
                        Carol once tried to become a professional napper but
                        realized binge-watching shows was more her style. When
                        not avoiding responsibilities, she’s busy making the
                        world a funnier place.
                      </p>
                      <strong>Follow me: </strong>
                      <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                        <li className="list-inline-item">
                          <Link href="/#" legacyBehavior>
                            <a
                              className="fb"
                              target="_blank"
                              title="Facebook"
                              rel="noopener noreferrer"
                            >
                              <i className="elegant-icon social_facebook"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/#" legacyBehavior>
                            <a
                              className="tw"
                              target="_blank"
                              title="Tweet now"
                              rel="noopener noreferrer"
                            >
                              <i className="elegant-icon social_twitter"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/#" legacyBehavior>
                            <a
                              className="pt"
                              target="_blank"
                              title="Pin it"
                              rel="noopener noreferrer"
                            >
                              <i className="elegant-icon social_pinterest"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Most popular</h5>
                      </div>
                      <div className="post-block-list post-module-1">
                        <ul className="list-post">
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                  <Link href="/#" legacyBehavior>
                                    <a>Spending Some Quality Time with Kids? It’s Possible</a>
                                  </Link>
                                </h6>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">05 August</span>
                                  <span className="post-by has-dot">150 views</span>
                                </div>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <Link href="/#" legacyBehavior>
                                  <a className="color-white">
                                    <img src="/assets/imgs/news/thumb-6.jpg" alt="" />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                  <Link href="/#" legacyBehavior>
                                    <a>Relationship Podcasts are Having “That” Talk</a>
                                  </Link>
                                </h6>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">12 August</span>
                                  <span className="post-by has-dot">6k views</span>
                                </div>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <Link href="/#" legacyBehavior>
                                  <a className="color-white">
                                    <img src="/assets/imgs/news/thumb-7.jpg" alt="" />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                  <Link href="/#" legacyBehavior>
                                    <a>Here’s How to Get the Best Sleep at Night</a>
                                  </Link>
                                </h6>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">15 August</span>
                                  <span className="post-by has-dot">16k views</span>
                                </div>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <Link href="/#" legacyBehavior>
                                  <a className="color-white">
                                    <img src="/assets/imgs/news/thumb-2.jpg" alt="" />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                  <Link href="/#" legacyBehavior>
                                    <a>America’s Governors Get Tested for a Virus That Is Testing Them</a>
                                  </Link>
                                </h6>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">12 August</span>
                                  <span className="post-by has-dot">3k views</span>
                                </div>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <Link href="/#" legacyBehavior>
                                  <a className="color-white">
                                    <img src="/assets/imgs/news/thumb-3.jpg" alt="" />
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="sidebar-widget widget_instagram wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Instagram</h5>
                      </div>
                      <div className="instagram-gellay">
                        <ul className="insta-feed">
                          <li>
                            <Link href="/#" legacyBehavior>
                              <a
                                href="/assets/imgs/thumbnail-3.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-1.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#" legacyBehavior>
                              <a
                                href="/assets/imgs/thumbnail-4.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-2.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#" legacyBehavior>
                              <a
                                href="/assets/imgs/thumbnail-5.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-3.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#" legacyBehavior>
                              <a
                                href="/assets/imgs/thumbnail-3.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-4.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#" legacyBehavior>
                              <a
                                href="/assets/imgs/thumbnail-4.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-5.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#" legacyBehavior>
                              <a
                                href="/assets/imgs/thumbnail-5.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-6.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default CategoryList;