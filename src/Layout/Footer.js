import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="py-4 bg-1">
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="d-flex justify-content-center py-2">
                            <h6 className=""><span className="font-200 fff-50">Copyright ©</span> <span className="f-color-4">Avezika</span></h6>
                        </div>
                    </Col>
                    <Col lg="6">
                        <center>
                            <div className="fff-50 font-200 py-2">
                                <span className="mx-4 font-13-5 font-600 cursor-pionter">Support</span>|
                                <span className="mx-4 font-13-5 font-600 cursor-pionter">Contact Us</span>|
                                <span className="mx-4 font-13-5 font-600 cursor-pionter">Disclaimer</span>|
                                <span className="mx-4 font-13-5 font-600 cursor-pionter">Add More</span>
                            </div>
                        </center>
                    </Col>
                    <Col lg="3">
                        <div className="d-flex justify-content-center py-2">
                            <div>
                                <i class="fab fa-facebook-f mx-2 icon-fb"></i>
                                <i class="fab fa-linkedin-in mx-2 icon-in"></i>
                                <i class="fab fa-twitter mx-2 icon-twit"></i>
                                <i class="fab fa-instagram mx-2 icon-insta"></i>
                                <i class="fab fa-pinterest-p mx-2 icon-p"></i>
                                <i class="fab fa-youtube mx-2 icon-y"></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;