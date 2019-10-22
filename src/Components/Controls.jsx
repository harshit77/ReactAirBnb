import React from "react";
import FormOptions from "./FormOptions";

export default function Controls() {
  return (
    <div className="controlSection separation">
      <div>
        <FormOptions heading="Reticle" />
      </div>
      <div className="stMarginTop">
        <FormOptions heading="ShotMap" />
      </div>
    </div>
  );
}
