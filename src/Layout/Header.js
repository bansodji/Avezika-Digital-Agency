import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Hero1 from "../img/hero5.jpeg";
import Hero2 from "../img/hero2.jpeg";
import Hero3 from "../img/hero3.jpeg";
import { HeroCarousel } from "../Components/Carousel";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    return (
        <header>
            <Navbar className="py-3 fff nav-padding" id="navbar" expand="lg">
                <Container fluid>
                    <div style={{ width: "100%" }} className="d-flex justify-content-between align-items-center">
                        <a>
                            <div id="avezika-icon" className="d-flex flex-column mx-auto">
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

            <div id="menu-toggler" className="uppercase">
                <CloseIcon id="menu-close-btn" className="fs-1 position-absolute cursor-pointer" style={{top: "20px", right: "20px"}}/>
                <div className="size-100 d-flex justify-content-center align-items-center text-center">
                    <ul>
                        <li className="fs-3 my-4 font-800"><a>Home</a></li>
                        <li className="fs-3 my-4 font-800"><a>About Us</a></li>
                        <li className="fs-3 my-4 font-800"><a>Services</a></li>
                        <li className="fs-3 my-4 font-800"><a>Portfolio</a></li>
                        <li className="fs-3 my-4 font-800"><a>Our News</a></li>
                        <li className="fs-3 my-4 font-800"><a>Contact</a></li>
                    </ul>
                </div>
            </div>

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

export default Header;