/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Stage, Layer, Rect, Text, Arrow, Line, Circle } from "react-konva";
import Konva from "konva";

class CanvasWafer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waferDiameter: null,
      response: {
        partialChipUsed: 0,
        goodChipUsed: 0,
        exclusionChipUsed: 0
      },
      canvasCentreX: null,
      canvasCentreY: null,
      canvasWidth: 550,
      canvasHeight: 550,
      edgeExclusion: null,
      mapArea: null,
      actualWafer: null,
      waferAfterEdgeExtrustion: null
    };
  }

  componentDidMount() {
    const fabInfo = this.props.wafer.fabinfo;
    this.setState({
      waferDiameter: fabInfo.diameter,
      canvasCentreX: this.state.canvasWidth * 0.5,
      canvasCentreY: this.state.canvasHeight * 0.5,
      edgeExclusion: fabInfo.edge_excl_distance,
      mapArea: this.state.canvasWidth / fabInfo.diameter,
      actualWafer: fabInfo.diameter,
      waferAfterEdgeExtrustion:
        fabInfo.diameter - 2 * fabInfo.edge_excl_distance
    });
  }

  render() {
    console.log(this.state);
    return (
      <Stage width={550} height={550} className="inRow"> 
        <Layer>
          <Circle
            x={this.state.canvasCentreX}
            y={this.state.canvasCentreY}
            radius={this.state.actualWafer * 0.5 * this.state.mapArea}
            fill="red"
          />
          <Circle
            x={this.state.canvasCentreX}
            y={this.state.canvasCentreY}
            radius={
              (this.state.actualWafer * 0.5 - this.state.edgeExclusion) *
              this.state.mapArea
            }
            fill="green"
          />
        </Layer>
      </Stage>
    );
  }
}

export default CanvasWafer;
