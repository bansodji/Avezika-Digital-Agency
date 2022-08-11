import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { HeadingDark } from "./SmallComp";
import Img1 from "../img/testmonials/testimonials-1.jpg";
import TestmonialData from "../Data/TestmonialData";

const QuotePosition = {
    top: "90%",
    left: "90%",
    transform: "translate(-90%, -90%)"
}

const Testmonial = (props) => {
    return (
        <section className="py-5 light-bg-3">
            <Container>
                <HeadingDark heading={props.heading} subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, est cumque." />

                <div className="my-5">
                    <div className="owl-carousel owl-theme">
                        {
                            TestmonialData.map((data) => (
                                <div className="item p-4 bg-fff">
                                    <Row className="size-100">
                                        <Col lg="3">
                                            <div className="size-100 d-flex justify-content-center align-items-center">
                                                <img src={data.image} className="circle-img-x" alt="" />
                                            </div>
                                        </Col>
                                        <Col lg="9">
                                            <div className="position-relative py-4">
                                                <h6 className="heading uppercase font-800 f-color-4">{data.name}</h6>
                                                <span className="f-grey-50 font-13">{data.designation}</span>
                                                <p className="text-secondary  mt-4">{data.testmony}</p>
                                                <div style={QuotePosition} className="position-absolute ms-5"><i className="fas fa-quote-right fs-1 f-color-4"></i></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Testmonial;