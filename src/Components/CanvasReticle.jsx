/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Stage, Layer, Rect, Line } from "react-konva";
import Konva from "konva";

class CanvasReticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { xyz: 0 };
  }

  handleClick = event => {
    console.log(event.target);
  };

  render() {
    console.log(
      this.props.reticle.field_width / 100 / 2,
      this.props.reticle.field_height / 100 / 2,
      this.props.reticle.field_width / 100
    );
    return (
      <Stage width={350} height={450}>
        <Layer>
          <Line
            points={[54.27, 210, 288.23, 210]}
            strokeWidth={3.8}
            stroke="black"
          />
          {/* Y axis remains same */}
          <Line
            points={[171.25, 200, 171.25, 220]}
            strokeWidth={3.96}
            stroke="black"
          />
          {/* Y axis remains same */}
          <Rect
            x={50}
            y={50}
            width={this.props.reticle.field_width / 100}
            height={this.props.reticle.field_height / 100}
            stroke="black"
            strokeWidth="2"
          />
          {/* <Rect
            x={50}
            y={50 + 160}
            width={115+3.96}
            height={158.8+0.80} 
            stroke="red"
            strokeWidth="2"
            onClick={this.handleClick}
          /> */}
          {/* <Rect
            x={50}
            y={50 + 160}
            width={115+3.96}
            height={158.8+0.80} 
            stroke="red"
            strokeWidth="2"
            onClick={this.handleClick}
          /> */}
          <Line
            points={[
              169.27,
              209.6,
              54.27,
              209.6,
              54.27,
              368.4,
              169.27,
              368.4,
              169.27,
              209.6
            ]}
            stroke="red"
            fill="#00D2FF"
            closed
            strokeWidth={1}
          />
          <Line
            points={[
              173.23,
              209.6,
              288.23,
              209.6,
              288.23,
              368.4,
              173.23,
              368.4,
              173.23,
              209.6
            ]}
            stroke="red"
            fill="#00D2FF"
            closed
            strokeWidth={1}
          />
          <Line
            points={[
              288.23,
              207.8,
              288.23,
              49.2,
              173.23,
              49.2,
              173.23,
              207.8,
              288.23,
              207.8
            ]}
            stroke="red"
            fill="#00D2FF"
            closed
            strokeWidth={1}
          />
          <Line
            points={[
              169.27,
              50,
              54.27,
              50,
              54.27,
              207.8,
              169.27,
              207.8,
              169.27,
              50
            ]}
            stroke="green"
            fill="#00D2FF"
            closed
            strokeWidth={1}
          />
          {/* Chip Height and scribe Height */}
        </Layer>
      </Stage>
    );
  }
}

export default CanvasReticle;
