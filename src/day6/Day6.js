import React from "react";
import text from "./day6-data.js";
//import text from "./day6-test-data.js";

class Day6 extends React.Component {
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
    
    let yesAnswers;
    let uniqueYesAnswers;
    let groupYesAnswerCounts = [];

    for(let group of text){

      yesAnswers = [];
      
      let persons = group.split('\n')
      for(let person of persons) {
        for (let personAnswer of person.split('')) {
          yesAnswers.push(personAnswer);
        }
      }
      uniqueYesAnswers = [...new Set(yesAnswers)];
      groupYesAnswerCounts.push(uniqueYesAnswers.length)
    }
const reducer = (a, b) => a + b;
    this.result = groupYesAnswerCounts.reduce(reducer);
  }
}

export { Day6 };

// incorrect guesses
// 
// correct 
// 6161