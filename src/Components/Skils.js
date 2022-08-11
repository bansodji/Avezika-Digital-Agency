import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { HeadingLight } from "./SmallComp";
import Img from "../img/skils.webp";

const Skils = () => {
    return (
        <section className="py-5 dark-bg-2">
            <Container className="fff">
                <HeadingLight heading="Our Skills" subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, est cumque." />
                <div className="my-5 py-5">
                    <img src={Img} className="img-fluid" alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <Row>
                        <Col><h6 className="px-4" style={{ color: "#d0e182" }}>DESIGNING</h6></Col>
                        <Col><h6 className="px-4" style={{ color: "#00bcd4" }}>PROGRAMMING</h6></Col>
                        <Col><h6 className="px-4" style={{ color: "#f8574b" }}>TESTING</h6></Col>
                        <Col><h6 className="px-4" style={{ color: "#9a77d7" }}>DATABASES</h6></Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Skils;