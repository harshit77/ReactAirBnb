import React, { Component } from "react";
import { Paper, Link, Breadcrumbs } from "@material-ui/core";
import CanvasReticle from "./CanvasReticle";

export default class ReticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { xyz: 0 };
  }

  render() {
    return (
      <div className="reticleSection separation">
        <Paper elevation={0}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Scribe File
            </Link>
          </Breadcrumbs>
          <CanvasReticle reticle={this.props.appData.reticle} />
        </Paper>
      </div>
    );
  }
}