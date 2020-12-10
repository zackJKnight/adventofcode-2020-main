import React from "react";
import text from "./day10-data.js";
//import text from "./day10-data-test.js";

class Day10 extends React.Component {
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
    let result = text.split("\n");
    return result;
  }

  countMatches(text) {
    
  }
}

export { Day10 };

// incorrect guesses
// 

// correct 
// 