import React from "react";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Theme1 = "#1a1b16";
const Theme2 = "#003b39";
const Theme3 = "#a20224";
const Theme4 = "#2e86de";

const Theme1a = "#1b1c17d9";
const Theme2a = "#003b39d9";
const Theme3a = "#a20225d9";
const Theme4a = "#2e86ded9";

const Theme1b = "#1b1c1799";
const Theme2b = "#003b3999";
const Theme3b = "#a2022599";
const Theme4b = "#5f27cd99";

const HeadingLight = (props) => {
    return (
        <div className="d-flex flex-column align-items-center fff">
            <h1 className="display-4 border-below-light font-800 heading">{props.heading}</h1>
            <h4 className="padding text-center mt-5 text-upper lh-base fff-50">{props.subheading}</h4>
        </div>
    );
}
const HeadingDark = (props) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="display-4 border-below-dark font-800 heading">{props.heading}</h1>
            <h4 className="padding text-center mt-5 text-upper lh-base text-secondary">{props.subheading}</h4>
        </div>
    );
}

function BoxOverlay(props) {
    return (
        <div className="box" style={{ height: "30rem" }}>
            <div>
                <img src={props.image} className="w-100" style={{ height: "30rem" }} alt="" />
            </div>
            <div className="box-overlay" style={{ background: props.color }}>
                <div className="size-100 px-5 d-flex flex-column align-items-center justify-content-center">
                    <i class={`${props.icon} fff font-md`}></i>
                    <h2 className="heading fff my-4 font-900">{props.title}</h2>
                    <h5 className="text-center lh-lg heading fff">{props.para}</h5>
                </div>
            </div>
        </div>
    );
}

function BoxOverlayHover(props) {
    return (
        <div className="box" style={{ height: '16rem' }}>
            <div>
                <img src={props.image} className="w-100" style={{ height: '16rem' }} alt="" />
            </div>
            <div className="box-overlay hide-this d-flex flex-column justify-content-between py-5 px-4" style={{ background: "linear-gradient(45Deg, #003b39d9, #a20225d9)" }}>
                <div className="border-below-full">
                    <CameraAltOutlinedIcon className="fs-1 me-3" />
                    <AttachFileOutlinedIcon className="fs-1 me-3" />
                    <ShareOutlinedIcon className="fs-1 me-3" />
                </div>
                <h4 className="text-uppercase heading font-800 space-4">{props.title}</h4>
            </div>
        </div>
    );
}

export { HeadingLight, HeadingDark, BoxOverlay, BoxOverlayHover, Theme1a, Theme2a, Theme3a, Theme4a, Theme1b, Theme2b, Theme3b, Theme4b };