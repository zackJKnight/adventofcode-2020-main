import React from "react";
import text from "./day5-data.js";
//import text from "./day4-test-data.js";

class Day5 extends React.Component {
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
    let ids = [];
    let minY = 0;
    let maxY = 0;
    let minX = 0;
    let maxX = 0;
    let currentYLen = 0;
    let newYLen = 0;
    let currentXLen = 0;
    let newXLen = 0;
    let passId = 0;
    let rowIndex = 0;
    let colIndex = 0;
    let row = [];
    let col = [];
    let rowNumber = 0;
    let colNumber = 0;

    for (let pass of text) {
      minY = 0;
      maxY = 127;
      minX = 0;
      maxX = 7;
      currentYLen = 0;
      newYLen = 0;
      currentXLen = 0;
      newXLen = 0;
      rowIndex = 0;
      colIndex = 0;
      rowNumber = 0;
      colNumber = 0;

      col = pass.split("").filter((item) => item === "R" || item === "L");
      row = pass.split("").filter((item) => item === "B" || item === "F");

      for (let code of row) {
        
        if ((rowIndex === row.length - 1)) {
          if (code === "B") {
            rowNumber = maxY;
            break;
          } else if (code === "F") {
            rowNumber = minY;
            break;
          }
        }

        currentYLen = maxY - minY + 1;
        newYLen = currentYLen / 2;

        if (code === "B") {
          minY = maxY - (newYLen - 1);
        } else if (code === "F") {
          maxY = minY + (newYLen - 1);
        }
        rowIndex++;
      }

      for (let code of col) {

        if ((colIndex === col.length - 1)) {
          if (code === "R") {
            colNumber = maxX;
            break;
          } else if (code === "L") {
            colNumber = minX;
            break;
          }
        }

        currentXLen = maxX - minX + 1;
        newXLen = currentXLen / 2;
        if (code === "R") {
          minX = maxX - (newXLen - 1);
        } else if (code === "L") {
          maxX = minX + (newXLen - 1);
        }
        colIndex ++;
      }
      passId = (rowNumber * 8) + colNumber;
      ids.push(passId);
      // mult row by 8 and add column.
    }
    this.result = Math.max(...ids);
  }
}

export { Day5 };

// incorrect guesses
// 999
