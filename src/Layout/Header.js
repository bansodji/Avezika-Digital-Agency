import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Hero1 from "../img/hero5.jpeg";
import Hero2 from "../img/hero2.jpeg";
import Hero3 from "../img/hero3.jpeg";
import { HeroCarousel } from "../Components/Carousel";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <>
            <header>
                <Navbar className="py-3 nav-padding" id="navbar" bg="light" expand="lg">
                    <Container fluid>
                        <div style={{ width: "100%" }} className="d-flex justify-content-between align-items-center">
                            <a>
                                <div className="d-flex flex-column mx-auto">
                                    <a className="fff m-auto text-center"
                                        style={{ padding: '5px 15px', border: '1px solid #fff', fontSize: '1.2rem' }}>A</a>
                                    <span className="fs-4 space-4 fff lh-sm">Avezika</span>
                                    <span className="lh-1 space-4 fff font-13 m-auto">Agency</span>
                                </div>
                            </a>
                            <MenuIcon className="fff fs-1" />
                        </div>
                    </Container>
                </Navbar>

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
        </>
    );
}

export default Header;