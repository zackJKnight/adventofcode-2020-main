import React from "react";
import text from "./day9-data.js";
//import text from "./day9-data-test.js";

class Day9 extends React.Component {
  result = 0;
  dataArray = this.prepData(text);
  preamble = 25;
  render() {
    return (
      <div>
          <h1>{this.countMatches(this.dataArray)}</h1>
      </div>
    );
  }

  prepData(text) {
    let result = text.split("\n");
    return result;
  }

  countMatches(text) {
    let preamble = 25;
    let min = 0;
    let max = preamble;
    let range;
    let target = 0;
    let rangeCopy;
    let filtered;

    for (let xmas of text) {
      range = text.slice(min, max);
      target = text[max];

      for (let item of range) {
        rangeCopy = range.slice();
        rangeCopy.splice(range.indexOf(item), 1);
        filtered = this.sumsToTarget(rangeCopy, item, target);
        if (filtered === true) {
          min++;
          max++;
          break;
        }
        if(range.indexOf(item) === range.length - 1){
          return target;
        }
      }
      console.log(`target: ${target} xmas: ${xmas}`)
    }
    return 'i searched em all';
  }

  sumsToTarget(arr, item, target){
    let result = arr.filter(a =>
      Number(a) !== Number(item) &&
      ((Number(a) + Number(item)) === Number(target))
    );
    if(result){console.log(`result: ${result}`)}
    return (result !== undefined && result.length > 0)
  }
}

export { Day9 };

// incorrect guesses
//

// correct
//
