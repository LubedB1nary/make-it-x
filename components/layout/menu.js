import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import NavMenu from "./nav";

const Menu = ({ addClass }) => {
    const [scroll, setScroll] = useState(0);
    const [isToggled, setToggled] = useState(false);
    const [size, setSize] = useState(0);

    const toggleTrueFalse = () => setToggled(!isToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener("resize", updateSize);
    }, []);

    return (
        <>
            <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
                <div className="container align-self-center position-relative">
                    <div className="main-nav float-left ">
                        <nav>
                            <ul className="main-menu d-none d-lg-inline font-small">
                                {/* Removed "Home" dropdown and "Mega Menu" */}
                                <li>
                                    <Link href="/category/travel">
                                        <a>Travel</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-grid">
                                        <a>Guides</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category-masonry">
                                        <a>Food</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/hotels">
                                        <a>Hotels</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category">
                                        <a>Review</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category">
                                        <a>Healthy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category">
                                        <a>Lifestyle</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                            </ul>

                            <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                                <button onClick={toggleTrueFalse}>
                                    <span className="menu-icon mr-10">
                                        <span className="menu-icon-inner"></span>
                                    </span>
                                    Main Menu
                                </button>
                                <NavMenu isToggled={isToggled} />
                            </div>
                        </nav>
                    </div>
                    <div className="float-right header-tools text-muted font-small">
                        <ul className="header-social-network d-inline-block list-inline mr-15">
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon fb text-xs-center" target="_blank">
                                        <i className="elegant-icon social_facebook"></i>
                                    </a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon tw text-xs-center" target="_blank">
                                        <i className="elegant-icon social_twitter "></i>
                                    </a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon pt text-xs-center" target="_blank">
                                        <i className="elegant-icon social_pinterest "></i>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="off-canvas-toggle-cover d-inline-block">
                            <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle" onClick={addClass}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    );
};

export default Menu;