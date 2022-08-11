import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WhyChooseUsData from "../Data/WhyChooseUsData";
import { HeadingDark } from "./SmallComp";

const WhyChooseUs = () => {
    return (
        <section className="py-5 light-bg-1">
            <Container>
                <HeadingDark heading="Why Choose Us" subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, est cumque." />
                <Row className="my-5 g-0">
                    {WhyChooseUsData.map( (data)=> (
                        <Col lg="3">
                            <div className="d-flex hover-light p-5">
                                <div className="pe-4">
                                    <h6 className="uppercase hover-heading mb-4 font-700">{data.title}</h6>
                                    <p className="text-secondary">{data.para}</p>
                                </div>
                                <div className="">
                                    <i class={`${data.icon} fs-1 hover-icon`}></i>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default WhyChooseUs;