/* eslint-disable react/destructuring-assignment */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "red"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {" "}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

class Apap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bsjdbfvs: 0 };
    alert("dfsvsf");
  }
  // componentDidMount() {

  // }

  render() {
    return <div>{this.state.bsjdbfvs}</div>;
  }
}
