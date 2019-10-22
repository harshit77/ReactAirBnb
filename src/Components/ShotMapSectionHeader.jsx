/* eslint-disable react/prop-types */
import React from "react";
import Paper from "@material-ui/core/Paper";
import CustomCheckBox from "./CustomCheckBox";
import "../Css/index.css";

export default function ShotMapSectionHeader(props) {
  function handleFilter(updatedOption) {
    props.optionSelected(updatedOption);
  }
  const { checkBoxOption } = props;
  console.log("dsnvjsbdvds", checkBoxOption);
  return (
    <div>
      <Paper className="selectionContainer" classes={{ rounded: false }} square>
        <CustomCheckBox
          checkBoxOption={checkBoxOption}
          optionSelected={handleFilter}
          inRow
        />
      </Paper>
    </div>
  );
}
