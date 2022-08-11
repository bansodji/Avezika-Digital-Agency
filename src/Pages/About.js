import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { OurProcess } from "../Components/OurProcess";
import { Product } from "../Components/Product";
import Skils from "../Components/Skils";
import { HeadingLeftLight } from "../Components/SmallComp";

const About = () => {
    return (
        <>
            <AboutPage />
            <Product />
            <Skils/>
            <OurProcess/>
        </>
    );
}

function AboutPage() {
    return (
        <section className="py-5 dark-bg-1">
            <Container>
                <HeadingLeftLight heading="About Us"/>
                <Col lg="8" className="">
                    <h5 className="font-300 fff-50 lh-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, suscipit ipsum eaque soluta ab aspernatur vitae alias dolor blanditiis consectetur facilis incidunt voluptas cum eligendi dolores, temporibus praesentium. Labore enim numquam quos ullam consectetur eos ex possimus atque repellendus, magnam officia exercitationem voluptates repudiandae minima, maiores veritatis similique mollitia? Eveniet quam rem voluptate voluptates modi, ratione dolorum fuga inventore consectetur eligendi eius dicta id provident hic ullam, quos rerum quae illo? Eum autem aperiam modi nostrum itaque cupiditate minus odio est delectus enim suscipit placeat veniam neque temporibus quasi labore ipsum, facere molestias natus. Molestiae nostrum eius quod illum repellat.</h5>
                </Col>
            </Container>
        </section>
    );
}

export default About;