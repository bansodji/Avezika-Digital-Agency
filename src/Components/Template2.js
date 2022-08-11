//Row column template with box-overlay

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BoxOverlay } from "./SmallComp";


const Template2 = (props) => {
    return (
        <Col lg="4">
            <div className="size-100">
                <BoxOverlay
                    image={props.image}
                    icon={props.icon}
                    title={props.title}
                    para={props.para}
                    color={props.color}
                />
            </div>
        </Col>
    );
}

export default Template2;