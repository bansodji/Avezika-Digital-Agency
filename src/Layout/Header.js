import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Hero1 from "../img/hero5.jpeg";
import Hero2 from "../img/hero2.jpeg";
import Hero3 from "../img/hero3.jpeg";
import { HeroCarousel } from "../Components/Carousel";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Navbar className="py-3 fff nav-padding" id="navbar" expand="lg">
                <Container fluid>
                    <div style={{ width: "100%" }} className="d-flex justify-content-between align-items-center">
                        <a href="/" id="avezika-icon" className="fff">
                            <div className="d-flex flex-column mx-auto">
                                <div id="brand-icon" className="m-auto text-center border-white fs-5"
                                    style={{ padding: '5px 15px' }}>A</div>
                                <span id="brand-name" className="fs-4 space-4 lh-sm">Avezika</span>
                                <span id="brand-subname" className="lh-1 space-4 font-13 m-auto">Agency</span>
                            </div>
                        </a>
                        <MenuIcon id="menu-toggler-btn" className="fs-1 cursor-pointer" />
                    </div>
                </Container>
            </Navbar>

            <MenuToggler />

            <div id="hero" className="wh-100">
                <div className="container-0">
                    <div className="owl-carousel owl-theme">
                        <HeroCarousel img={Hero1} title="We are creative digital agency" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, molestiae eaque! Quaerat soluta voluptatibus vitae tempora! Quidem dolor dolore, delectus, mollitia." btn="Get Started" />
                        <HeroCarousel img={Hero2} title="Hire us for your digital enhancement" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, molestiae eaque! Quaerat soluta voluptatibus vitae tempora! Quidem dolor dolore, delectus, mollitia." btn="Get Started" />
                        <HeroCarousel img={Hero3} title="We offer digital growth" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, molestiae eaque! Quaerat soluta voluptatibus vitae tempora! Quidem dolor dolore, delectus, mollitia." btn="Get Started" />
                    </div>
                </div>
            </div>
        </header>
    );
}

function MenuToggler() {
    return (
        <div id="menu-toggler">
            <div className="d-flex justify-content-between align-items-center p-4">
                <a href="/" className="fff">
                    <div className="d-flex flex-column mx-auto">
                        <div className="m-auto text-center border-white fs-5"
                            style={{ padding: '5px 15px' }}>A</div>
                        <span className="fs-4 space-4 lh-sm">Avezika</span>
                        <span className="lh-1 space-4 font-13 m-auto">Agency</span>
                    </div>
                </a>
                <CloseIcon id="menu-close-btn" className="fs-1 cursor-pointer" />
            </div>
            <div id="menu-list" className="size-100 mt-4 d-flex justify-content-center text-center">
                <ul className="uppercase">
                    <li className="fs-3 my-4 font-800">
                        <Link className="route-redirect fff" to="/">Home</Link>
                    </li>
                    <li className="fs-3 my-4 font-800">
                        <Link className="route-redirect fff" to="/about">About Us</Link>
                    </li>
                    <li className="fs-3 my-4 font-800">
                        <Link className="route-redirect fff" to="/services">Services</Link>
                    </li>
                    <li className="fs-3 my-4 font-800">
                        <Link className="route-redirect fff" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="fs-3 my-4 font-800">
                        <Link className="route-redirect fff" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;