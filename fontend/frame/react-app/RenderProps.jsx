import React from "react";

class DataProvider extends React.Component {
  state = {
    name: "Drex",
  };
  render() {
    return <div>{this.props.render(this.state)}</div>;
  }
}

export default function renderProps() {
  return <DataProvider render={(data) => <div>Hello! {data.name}</div>} />;
}
