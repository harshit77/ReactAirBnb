/* eslint-disable import/no-unresolved */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "../Css/index.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className="flexGrow">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} noWrap>
            ChipOpt
          </Typography>
          <div className="headerSearch">
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <div className="searchIcon">
              <SearchIcon />
            </div>
          </div>
          <div className="flexGrow" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
