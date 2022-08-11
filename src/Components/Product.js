import React from "react";
import { HeadingDark } from "../Components/SmallComp";
import { Container, Row, Col } from "react-bootstrap";
import Img1 from "../img/products/product1.jpg";
import Img2 from "../img/products/product2.jpg";
import Img3 from "../img/products/product3.jpg";

export const Product = () => {
    return (
        <section className="py-5 light-bg-1">
            <Container className="my-5">
                <HeadingDark heading="Awesome For Startup & Tech" subheading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi facilis"/>
                <Row className="my-5">
                    <Col lg="3">
                        <div className="d-flex align-items-end size-100">
                            <div className="">
                                <img src={Img1} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div>
                            <img src={Img3} className="img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="d-flex align-items-end size-100">
                            <div className="">
                                <img src={Img2} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="my-5">
                    <h4 className="font-300 lh-base text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi facilis recusandae maxime voluptas cum. Iste ut quia maiores totam possimus deleniti commodi! Sequi, modi! Quasi.</h4>
                </div>

                <center><button className="f-btn-4">Download App</button></center>
            </Container>
        </section>
    );
}