import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeadingLeftLight } from "./SmallComp";

export function CommonHeadComp(props) {
    return (
        <section className="py-5 dark-bg-1">
            <Container>
                <HeadingLeftLight heading={props.heading}/>
                <Col lg="8" className="">
                    <h5 className="font-300 fff-50 lh-lg">{props.para}</h5>
                </Col>
            </Container>
        </section>
    );
}