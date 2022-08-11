import React from "react";
import AboutImg from "../img/about1.jpeg";
import Template1 from "../Components/Template1";
import Template2 from "../Components/Template2";
import AboutData from "../Data/AboutData";
import { Row } from "react-bootstrap";
import { Theme1a, Theme2b, Theme3b, Theme4b } from "../Components/SmallComp";
import Skils from "../Components/Skils";
import OurWorks from "../Components/OurWorks";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurCoreMinds from "../Components/OurCoreMinds";
import Testmonial from "../Components/Testmonial";
import ContactUs from "../Components/ContactUs";

const Body = () => {
    let color = "";
    return (
        <>
            {/* About us start */}
            <Template1 title="About Us" heading="We are creative agency" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quidem porro, voluptate autem eos hic! Illo quasi accusamus blanditiis, id vel deleniti quos, excepturi doloribus animi eius consequuntur ipsa, praesentium ad qui iure quia dolore deserunt dolorum modi laudantium culpa incidunt assumenda quibusdam! Modi soluta ut debitis velit." img={AboutImg} isBtn btnName="Read More" inverse />

            <section>
                <div className="container-fluid px-0">
                    <Row className="g-0">
                        {AboutData.map((data) => (
                            <Template2 title={data.title} para={data.para} icon={data.icon} image={data.image} color={(data.id % 3 == 1) ? Theme3b : Theme2b} />
                        ))}
                    </Row>
                </div>
            </section>
            {/* About us end */}

            <Skils/>
            <OurWorks/>
            <WhyChooseUs/>
            <OurCoreMinds/>
            <Testmonial/>
            <ContactUs/>

        </>
    );
}

export default Body;