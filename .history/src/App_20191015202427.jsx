/* eslint-disable react/destructuring-assignment */
import React from "react";
import Header from "./Components/Header";
import ShotMapSectionHeader from "./Components/ShotMapSectionHeader";
import ShotMapGridContainer from "./Components/ShotMapGridContainer";

const checkBoxOption = [
  {
    checked: true,
    checkBoxLabel: "Controls"
  },
  {
    checked: true,
    checkBoxLabel: "Reticle"
  },
  {
    checked: true,
    checkBoxLabel: "ShotMap"
  }
];

function App() {
  const [option, setOption] = React.useState(checkBoxOption);
  function handleFilter(updatedOption) {
    console.log(updatedOption);
    setOption(updatedOption);
  }
  return (
    <div>
      <Header />
      <ShotMapSectionHeader
        checkBoxOption={option}
        optionSelected={handleFilter}
      />
      <ShotMapGridContainer gridEnable={option} />
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
