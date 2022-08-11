import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeadingLight } from "./SmallComp";
import Img1 from "../img/team/team-1.jpg";
import OurTeam from "../Data/OutTeam";

const OurCoreMinds = () => {
    return (
        <section className="py-5 dark-bg-1">
            <Container>
                <HeadingLight heading="Our Core Minds" subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, est cumque." />
                <Row className="my-5">
                    {OurTeam.map( (data) => (
                        <Col lg="4">
                            <div className="fff team-card f-border p-5 border-bottom-bold">
                                <img src={data.image} className="circle-img-x mb-4" alt="" />
                                <h5 className="heading mb-2">{data.name}</h5>
                                <p className="font-9 mb-4">{data.designation}</p>
                                <h4 className="mb-4 f-color-4 font-800">{data.mobile}</h4>
                                <div className="">
                                    <span className="circle-icon me-2"><i class="fab fa-facebook-f"></i></span>
                                    <span className="circle-icon me-2"><i class="fab fa-twitter"></i></span>
                                    <span className="circle-icon me-2"><i class="fab fa-linkedin-in"></i></span>
                                    <span className="circle-icon me-2"><i class="fab fa-skype"></i></span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <center><button class="f-btn-4 mt-4">Work With Us</button></center>
            </Container>
        </section>
    );
}

export default OurCoreMinds;