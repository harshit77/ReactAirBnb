import React from "react";
import CanvasWafer from "./CanvasWafer";

export default function ShotMap(props) {
  return (
    <div className="shotMapSection">
      <CanvasWafer wafer={props.appData} />
    </div>
  );
}
