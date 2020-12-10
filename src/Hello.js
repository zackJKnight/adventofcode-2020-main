import React from "react";
import text from "./data.js";

class Hello extends React.Component {
  grid = this.prepData(text);
  result = 0;
  render() {
    return <div>
      <button onClick={this.countTrees(this.grid)}><h1>{this.result}</h1>
      </button>
    </div>;
  }

  prepData(text) {
    let inputAsArray = [];
    for (let line of text.split("\n")) {
      let characters = [];
      for (let character of line.split('')) {
        characters.push(character.trim());
      }
      inputAsArray.push(characters);
    }

    return inputAsArray;
  }

  countTrees(grid) {
    this.result = "thinking";
    let treeCount = 0;
    let rowCount = 1;
    let columnIndex = 0;
    let columnNumber;

    for (let row of grid) {
      columnNumber = 0;
      for (let column of row) {

        //console.log(row.length)
        console.log(columnIndex)
        //console.log(columnNumber)
        
        if (columnIndex !== 0 && columnIndex >= columnNumber) {
          //console.log("before start")
          columnNumber ++;
          continue;
        }
        if (
          (columnNumber / rowCount) / 3 === 1 &&
          column === "#"
        ) {
          treeCount++;
          if(columnIndex === row.length){
            console.log("rolled")
            columnIndex = 0;
            break;
          }
          break;
        } else if((columnNumber / rowCount) / 3 === 1){
          if(columnIndex === row.length){
            columnIndex = 0;
            break;
          }
          break;
        }
        columnIndex ++;
        columnNumber ++;
      }
      rowCount++;
    }
    this.result = treeCount;
  }

  pointIsOnSlope(rowIndex, columnIndex) {
    // use maths to determine if the given x,y is on the slope
    // slope m = rise -1 / run 3
    // y - b = m(x - a)
    //console.log(`col: ${columnIndex} row: ${rowIndex}`)
    console.log((1 / 3) * rowIndex + 1)
    let pointSlope = columnIndex + 1 === (1 / 3) * (rowIndex + 1);
    //if(pointSlope){console.log(`winner col: ${columnIndex} row: ${rowIndex}`)}
    return pointSlope;
  }

}

export { Hello };
