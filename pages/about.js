import Layout from "../components/layout/layout";

function About() {
    return (
        <>
            <Layout>
                <main className="bg-grey pb-30">
                    <div className="container single-content">
                        <div className="entry-header entry-header-style-1 mb-50 pt-50 text-center">
                            <h1 className="entry-title mb-20 font-weight-900 ">
                                About Me
                            </h1>
                            <p className="text-muted">
                                <span
                                    className="typewrite d-inline"
                                    data-period="2000"
                                    data-type='[ "Local Explorer.", "Community Storyteller.", "Adventure Seeker." ]'
                                ></span>
                            </p>
                        </div>
                        {/* <!--end single header--> */}
                        <figure className="image mb-30 m-auto text-center border-radius-10">
                            <img
                                className="border-radius-10"
                                src="/assets/imgs/news/news-17.jpg"
                                alt="About Me"
                            />
                        </figure>
                        {/* <!--figure--> */}
                        <article className="entry-wraper">
                            <p className="font-large">
                                Welcome to Make it Missoula! I'm [what do i put here], a passionate local dedicated to showcasing the best of Missoula and the surrounding Montana area. From hidden hiking trails to must-try eateries, I’m here to share authentic stories, community events, and outdoor adventures that make this place special.
                            </p>
                            <hr className="wp-block-separator is-style-wide" />
                            <p>
                                <span className="mr-5">
                                    <ion-icon
                                        name="location-outline"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="location outline"
                                    ></ion-icon>
                                </span>
                                <strong>Location:</strong> Missoula, Montana
                            </p>
                            <p>
                                <span className="mr-5">
                                    <ion-icon
                                        name="home-outline"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="home outline"
                                    ></ion-icon>
                                </span>
                                <strong>Website:</strong>{" "}
                                <a href="https://makeitmissoula.com" target="_blank" rel="noopener noreferrer">
                                    https://makeitmissoula.com
                                </a>
                            </p>
                            <p>
                                <span className="mr-5">
                                    <ion-icon
                                        name="planet-outline"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="planet outline"
                                    ></ion-icon>
                                </span>
                                <strong>Support:</strong>{" "}
                                <a href="mailto:support@makeitmissoula.com">
                                    support@makeitmissoula.com
                                </a>
                            </p>
                            <h3 className="mt-30">Advertise with Us</h3>
                            <hr className="wp-block-separator is-style-wide" />
                            <p>
                                Interested in reaching locals and visitors alike? For advertising inquiries, please contact us directly at{" "}
                                <a href="mailto:ads@makeitmissoula.com">ads@makeitmissoula.com</a>. We offer customized packages tailored to your campaign goals.
                            </p>
                            <h1 className="mt-30">Get in Touch</h1>
                            <hr className="wp-block-separator is-style-wide" />
                            <form
                                className="form-contact comment_form"
                                action="#"
                                id="commentForm"
                            >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                type="text"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="phone"
                                                id="phone"
                                                type="text"
                                                placeholder="Phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea
                                                className="form-control w-100"
                                                name="message"
                                                id="message"
                                                cols="30"
                                                rows="9"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="button button-contactForm"
                                    >
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </article>
                    </div>
                    {/* <!--container--> */}
                </main>
            </Layout>
        </>
    );
}

export default About;