import React from "react";
import { ColoredAboutBlock } from "../Components/ColoredAboutBlock";
import { CommonHeadComp } from "../Components/CommonHeadComp";
import { OurProcess } from "../Components/OurProcess";
import WhyChooseUs from "../Components/WhyChooseUs";

export const Services = () => {
    return (
        <>
            <CommonHeadComp heading="Services" para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, suscipit ipsum eaque soluta ab aspernatur vitae alias dolor blanditiis consectetur facilis incidunt voluptas cum eligendi dolores, temporibus praesentium. Labore enim numquam quos ullam consectetur eos ex possimus atque repellendus, magnam officia exercitationem voluptates repudiandae minima, maiores veritatis similique mollitia? Eveniet quam rem voluptate voluptates modi, ratione dolorum fuga inventore consectetur eligendi eius dicta id provident hic ullam, quos rerum quae illo? Eum autem aperiam modi nostrum itaque cupiditate minus odio est delectus enim suscipit placeat veniam neque temporibus quasi labore ipsum, facere molestias natus. Molestiae nostrum eius quod illum repellat." />
            <WhyChooseUs heading="We Create Best Products" />
            <ColoredAboutBlock/>
            <OurProcess heading="What We Stand For"/>
        </>

    );
}