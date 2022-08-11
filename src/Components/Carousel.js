import React from "react";

const Carousel = () => {
    return (
        <>
            <h1>Test</h1>
        </>
    );
}

const HeroCarousel = (props) => {    
    return (
        <>
            <div className="item" style={{ background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${props.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="wh-100 container fff d-flex flex-column justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="display-5 heading font-600 mb-5">{props.title}</h1>
                        <h6 className="font-200 space-2 mb-5 lh-lg">{props.para}</h6>
                        <button className="f-btn-2">{props.btn}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
export { HeroCarousel };