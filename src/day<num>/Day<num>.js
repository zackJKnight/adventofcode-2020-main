import React from "react";
import text from "./day<num>-data.js";
//import text from "./day<num>-data-test.js";

class Day<num> extends React.Component {
  result = 0;
  dataArray = this.prepData(text);

  render() {
    return (
      <div>
        <button onClick={this.countMatches(this.dataArray)}>
          <h1>{this.result}</h1>
        </button>
      </div>
    );
  }

  prepData(text) {
    let result = text.split("\n\n");
    return result;
  }

  countMatches(text) {
    
  }
}

export { Day<num> };

// incorrect guesses
// 

// correct 
// 