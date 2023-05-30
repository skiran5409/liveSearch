import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateScore } from "../Redux/action";

const OutGoing = (props) => {
  useEffect(() => {
    submittedAnswer(props.submittedValue);
  });

  const submittedAnswer = (str) => {
    const ans = str.toString();
    switch (ans) {
      case 'Ottawa':
        props.updateScore(1);
        break;
      case 'Vancouver':
      case 'Toronto':
      case 'Montreal':
        props.updateScore(-1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {submittedAnswer(props.submittedValue)}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

const mapActionsToProps = {
  updateScore: updateScore
}

export default connect(mapStateToProps, mapActionsToProps)(OutGoing);
