import React from "react";
import BodyCenterTop from "./BodyCenterTop/BodyCenterTop";
import BodyCenterBottom from "./BodyCenterBottom/BodyCenterBottom";

export default function BodyCenter() {
    return (
        <div className="body-center">
            <BodyCenterTop />
            <BodyCenterBottom />
        </div>
    )
}