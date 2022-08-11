import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BoxOverlayHover, HeadingLight } from "./SmallComp";
import { Theme1a, Theme2b, Theme3b, Theme4b } from "../Components/SmallComp";
import Img1 from "../img/portfolio/portfolio1.jpg";
import OurWorkData from "../Data/OurWorkData";

const OurWorks = (props) => {
    return (
        <section className="py-5 dark-bg-3 fff">
            <Container>
                <HeadingLight heading={props.heading} subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, est cumque." />
            </Container>
            <Row className="g-0 px-0 my-5">
                {OurWorkData.slice(0, props.limit).map((data) => (
                    <Col lg="3">
                        <BoxOverlayHover image={data.image} title={data.title} />
                    </Col>
                ))}
            </Row>
            <Container>
                <center><button class="f-btn-4 mt-4">I Want the Same</button></center>
            </Container>

        </section>
    );
}

export default OurWorks;