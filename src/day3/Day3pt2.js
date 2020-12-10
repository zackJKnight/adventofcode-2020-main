import React from "react";
import text from "./day3-pt2-data.js";
//import text from "./day3-test-data.js";

class Day3pt2 extends React.Component {
  
    moveX = 0;
    moveY = 0;
    slopes = this.getSlopes();
    result = 1;
    
    lineLength = this.prepData(text);
    textAsArray = text
      .split("")
      .map((i) => i.replace(/(\r\n|\n|\r)/gm, ""));
  

  render() {
    return (
      <div>
          <h1>{this.countTrees(this.textAsArray, this.lineLength)}</h1>
      </div>
    );
  }

  prepData(text) {
    let line = text.split("\n")[0].length;
    return line;
  }

  countTrees(text, lineLength) {
    let filteredtext = text.filter(function (el) {
      return el !== "";
    });

    //console.log(filteredtext)
    let index = 0;
    let lineIndex = 0;
    let matchCount = 0;
    let nextLineIndex = 0;
    let startIndex = 0;
    let endIndex = 0;
    for (let slope of this.slopes) {
      matchCount = 0;
      lineIndex = 0
      index = 0;
      while (index < filteredtext.length) {
        
        startIndex = Math.floor(index / lineLength) * lineLength;
        endIndex = startIndex + lineLength - 1;

        lineIndex = index - startIndex;
        nextLineIndex = lineIndex + slope.x;
        
        if (nextLineIndex > lineLength - 1) {
          nextLineIndex -= lineLength;
        }
let drop = slope.y > 1 ? lineLength * (slope.y - 1) : 0;
        index = ((endIndex + 1) + drop) + nextLineIndex;
        
        if (index > filteredtext.length) {
          console.log(`final line index was ${index}`);
          break;
        }
        
        let checkSpot = filteredtext.slice(index, index + 1);
        if (checkSpot[0] === "#") {
          matchCount++;
        }

      }
      slope.matches = matchCount;
    }

    return this.slopes.map(slope => this.result *= slope.matches)

  }

  getSlopes() {
    return [
      { x: 3, y: 1, matches:0 },
      { x: 1, y: 1, matches:0 },
      { x: 5, y: 1, matches:0 },
      { x: 7, y: 1, matches:0 },
      { x: 1, y: 2, matches:0 },
    ];
  }
}

export { Day3pt2 };

// correct
// 7540141059

// 151, 103, 83, 99, 59

// incorrect answers
// 151155531290899127799001383397003
// 1511555312908991277990017540141059