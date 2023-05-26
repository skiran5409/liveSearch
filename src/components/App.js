import React, { Component} from "react";
import Incoming from "./Incoming";
import Outgoing from "./Outgoing";

const canUseDOM = !!(
    (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
);

if (canUseDOM) {
  require('./App.css');
}

class App extends Component {
  render()
 {
  return(
    <div className="test" id="">
      <p>What is the capital of Ontario?</p>
    <Incoming defaultInput = {''} />
    <Outgoing />
    </div>
  )
 }}

export default App;
