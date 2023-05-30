import React, { Component} from "react";
import Question from "./Question";
import Answer from "./Answer";
import Score from "./Score";
import Result from "./Result";
import { connect } from "react-redux";
const canUseDOM = !!(
    (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
);

if (canUseDOM) {
  require('./App.css');
}

class App extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      score: 0
    };
  }

  render()
 {
  return(
    <div className="test" id="">
    
    {<div><Score />
    <Question defaultInput = {''}  />
    <Answer /></div>}
    {this.props.score === 1 ? <Result /> : null}
    {this.props.score === -1 ? <Result /> : null}
    </div>
  )
 }}

 const mapStateToProps = state => {
  return state;
}


export default connect(mapStateToProps)(App);
