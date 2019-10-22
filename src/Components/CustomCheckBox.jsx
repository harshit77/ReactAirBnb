/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function CustomCheckBox(props) {
  const [shotOptions, setShotOptions] = React.useState(props.checkBoxOption);
  const handleChange = (name, index) => event => {
    const changedCheckbox = {
      checked: event.target.checked,
      checkBoxLabel: name
    };
    const newArr = [...shotOptions];
    newArr[index] = changedCheckbox;
    setShotOptions(newArr);
    props.optionSelected(newArr);
  };

  return (
    <FormGroup
      row={props.inRow ? "inRow" : ""}
      className={!props.inRow ? "stPadding" : ""}
    >
      {/* {props.checkBoxOption.name !== undefined ? (
        <FormLabel component="legend">{props.radioOption.name}</FormLabel>
      ) : null} */}
      {shotOptions.map((_option, index) => {
        return (
          <div
            className={props.inRow ? "inRow" : ""}
            key={_option.checkBoxLabel}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={_option.checked}
                  onChange={handleChange(_option.checkBoxLabel, index)}
                  value={_option.checkBoxLabel}
                  color="primary"
                />
              }
              label={_option.checkBoxLabel}
            />
          </div>
        );
      })}
    </FormGroup>
  );
}
