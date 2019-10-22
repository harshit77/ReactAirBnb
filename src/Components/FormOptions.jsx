import React, { Component } from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import CustomCheckBox from "./CustomCheckBox";

const checkBoxOption = [
  {
    checked: true,
    checkBoxLabel: "All"
  },
  {
    checked: true,
    checkBoxLabel: "Chip Array"
  },
  {
    checked: true,
    checkBoxLabel: "PCM's"
  },
  {
    checked: true,
    checkBoxLabel: "Blinds"
  },
  {
    checked: true,
    checkBoxLabel: "Center Point"
  },
  {
    checked: true,
    checkBoxLabel: "Lens Field"
  },
  {
    checked: true,
    checkBoxLabel: "Reticle Content"
  }
];

export default class FormOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { xyz: 0 };
  }

  render() {
    const { heading } = this.props;
    return (
      <FormControl
        component="fieldset"
        variant="outlined"
        classes={{ root: "formControl" }}
        fullWidth
      >
        <FormLabel component="legend">{heading}</FormLabel>
        <CustomCheckBox checkBoxOption={checkBoxOption} inRow={false} />
      </FormControl>
    );
  }
}
