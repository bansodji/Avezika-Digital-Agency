import React from "react";
import { Row } from "react-bootstrap";
import AboutData from "../Data/AboutData";
import Template2 from "../Components/Template2";
import { Theme1a, Theme2b, Theme3b, Theme4b } from "../Components/SmallComp";

export const ColoredAboutBlock = () => {
    return (
        <section>
            <div className="container-fluid px-0">
                <Row className="g-0">
                    {AboutData.map((data) => (
                        <Template2 title={data.title} para={data.para} icon={data.icon} image={data.image} color={(data.id % 3 == 1) ? Theme3b : Theme2b} />
                    ))}
                </Row>
            </div>
        </section>
    );
}