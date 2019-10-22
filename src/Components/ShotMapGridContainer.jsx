/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Controls from "./Controls";
import ShotMap from "./ShotMap";
import ReticleContainer from "./ReticleContainer";
import "../Css/index.css";

export default class ShotMapGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { appData: null };
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/bTBVVDzkXS?indent=2")
      .then(response => response.json())
      .then(jsonResponse => this.setState({ appData: jsonResponse }))
      .catch(error => console.log(error));
  }

  render() {
    const { gridEnable } = this.props;
    console.log(":Vsdvsdvsd", this.state.appData);
    return (
      <div className="flexGrow">
        {this.state.appData != null && (
          <div className="stMarginTop stContainerPadding stBg">
            {gridEnable.map(item => {
              return item.checkBoxLabel === "Controls" && item.checked ? (
                <Controls />
              ) : item.checkBoxLabel === "Reticle" && item.checked ? (
                <ReticleContainer appData={this.state.appData} />
              ) : item.checkBoxLabel === "ShotMap" && item.checked ? (
                <ShotMap appData={this.state.appData} />
              ) : null;
            })}
          </div>
        )}
      </div>
    );
  }
}
