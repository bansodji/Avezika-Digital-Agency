import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeadingLight } from "./SmallComp";
import ContactData from "../Data/ContactData";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';

const ContactUs = () => {
    return (
        <section className="py-5 dark-bg-5 fff">
            <Container>
                <HeadingLight heading="Contact Us" />
                <Row className="my-5">
                    {ContactData.map((data) => (
                        <Col lg="3">
                            <div className="d-flex flex-column align-items-center">
                                <div className={`p-4 fff rounded ${data.color} d-flex justify-content-center align-items-center`} style={{ width: "20px", height: "20px" }}>
                                    <i class={`${data.icon} fs-5`}></i>
                                </div>
                                <h5 className="heading uppercase mt-4">{data.title}</h5>
                                <p className="text-center">{data.desc1}<br />{data.desc2}<br />{data.desc3}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row className="gy-4">
                    <Col lg="4">
                        <div className="f-form-w" >
                            <input type="text" placeholder="Name" />
                            <PersonOutlineIcon className="input-icon" />
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="f-form-w" >
                            <input type="text" placeholder="Email" />
                            <MailOutlineIcon className="input-icon" />
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="f-form-w" >
                            <input type="text" placeholder="Website" />
                            <LanguageIcon className="input-icon" />
                        </div>
                    </Col>
                    <Col lg="12">
                        <textarea placeholder="Message" className="f-textarea"></textarea>
                    </Col>
                    <Col className="12">
                        <button className="f-btn-5 w-100">Send Message</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactUs;