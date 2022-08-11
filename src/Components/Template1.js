//This contain basic Template with two columns (6/6). One is Description and another is Image.
//This is available in inverse order too.
//Props==> (1) title (2) heading (3) para (4) isBtn<bool> (5) btnName (6) img (7) inverse<bool>

import { Container, Col, Row } from "react-bootstrap";
import React from "react";

const Template1 = (props) => {
    return (
        <section className="py-5 dark-bg-1 fff">
            <Container>
                <h1 className="font-800 border-below-light heading text-center display-4">{props.title}</h1>
                <Row className="my-5 pt-5">
                    {
                        (props.inverse) ? <ColDesc heading={props.heading} para={props.para} isBtn={props.isBtn} btnName={props.btnName} /> : <></>     //same
                    }
                    <ColImg img={props.img}/>
                    {
                        (props.inverse) ? <></> : <ColDesc heading={props.heading} para={props.para} isBtn={props.isBtn} btnName={props.btnName} />     //same
                    }
                </Row>
            </Container>
        </section>
    );
}

const ColDesc = (props) => {
    return (
        <Col lg={6}>
            <h1 className="font-200 heading display-4 mb-4">{props.heading}</h1>
            <p>{props.para}</p>
            {
                (props.isBtn) ? <button className="f-btn-2 mt-4">{props.btnName}</button> : <></>
            }
        </Col>
    );
}

const ColImg = (props) => {
    return (
        <Col lg={6} className="hide-on-sm">
            <div className="size-100">
                <img src={props.img} className="size-100" alt="" />
            </div>
        </Col>
    );
}

export default Template1;