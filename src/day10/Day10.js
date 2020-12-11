import React from "react";
import text from "./day10-data.js";
//import text from "./day10-data-test.js";

// outputJoltage
// if inputJoltage (or source rating) is 1, 2, or 3 lower
// outletJoltage = 0
// myDeviceRating = adapters.max + 3
// sort the list low to high
//

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
    let sortedJoltages = this.sortJoltagesAscending(text).map(a => Number(a))
    sortedJoltages.push(Math.max(...sortedJoltages) + 3);
    sortedJoltages.unshift(0);
    let lowerByOne = this.countRatingDifference(sortedJoltages, 1)
    let lowerByThree = this.countRatingDifference(sortedJoltages, 3);

    this.result = Number(lowerByOne.length) * Number(lowerByThree.length)
  }

  countRatingDifference(arr, diff){
  let result = arr.filter((a, index) => 
  arr[index +1] - a === diff
  );
  return result;
  }

  sortJoltagesAscending(joltages) {
return joltages.sort((a, b) => a - b)
  }
}

export { Day10 };

// incorrect guesses
// 1664 too low
// 1728 too low

// correct 
// 