import { data } from "jquery";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeadingLight } from "./SmallComp";

export const OurProcess = () => {
    return (
        <section className="py-5 dark-bg-6">
            <Container className="">
                <HeadingLight heading="Our Process" subheading="Temporibus praesentium. Labore enim numquam quos ullam consectetur eos ex possimus atque" />
                <Row className="my-5">
                    <Column id="01" title="Client Interactcion" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum, ipsa natus deserunt sapiente adipisci neque veritatis suscipit nisi necessitatibus!"/>
                    <Column id="02" title="Project Creation" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum, ipsa natus deserunt sapiente adipisci neque veritatis suscipit nisi necessitatibus!"/>
                    <Column id="03" title="Continuing Support" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum, ipsa natus deserunt sapiente adipisci neque veritatis suscipit nisi necessitatibus!"/>
                </Row>
            </Container>
        </section>
    );
}

function Column(props) {
    return (
        <Col lg="4">
            <div>
                <h1 className="fff display-1 font-800">{props.id}</h1>
                <h6 className="mt-4 uppercase font-700 f-color-4 border-below-left-blue">{props.title}</h6>
                <p className="mt-5">{props.desc}</p>
            </div>
        </Col>
    );
}