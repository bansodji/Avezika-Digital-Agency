import React from "react";
import AboutImg from "../img/about1.jpeg";
import Template1 from "../Components/Template1";
import Skils from "../Components/Skils";
import OurWorks from "../Components/OurWorks";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurCoreMinds from "../Components/OurCoreMinds";
import Testmonial from "../Components/Testmonial";
import ContactUs from "../Components/ContactUs";
import { ColoredAboutBlock } from "../Components/ColoredAboutBlock";

const Home = () => {
    return (
        <>
            {/* About us start */}
            <Template1 title="About Us" heading="We are creative agency" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quidem porro, voluptate autem eos hic! Illo quasi accusamus blanditiis, id vel deleniti quos, excepturi doloribus animi eius consequuntur ipsa, praesentium ad qui iure quia dolore deserunt dolorum modi laudantium culpa incidunt assumenda quibusdam! Modi soluta ut debitis velit." img={AboutImg} isBtn btnName="Read More" inverse />

            <ColoredAboutBlock />
            {/* About us end */}

            <Skils heading="Our Skills" />
            <OurWorks heading="Our Works" limit="4"/>
            <WhyChooseUs heading="Why Choose Us" />
            <OurCoreMinds heading="Our Core Minds" />
            <Testmonial heading="Customers About Us" />
            <ContactUs heading="Contact Us" />

        </>
    );
}


export default Home;