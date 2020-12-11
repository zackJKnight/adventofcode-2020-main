import React from "react";
import text from "./day11-data.js";
//import text from "./day11-data-test.js";

class Day11 extends React.Component {
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
    let mapHisory = []
    let newMap;
    let floor = '.';
    let empty = 'L';
    let occupied = '#';
    let x = 0
    let y = 0
    let up = [y + 1, x]
    let down = [y - 1, x]
    let left = [y, x - 1]
    let right = [y, x + 1]
    let upRight = [y + 1, x + 1]
    let upLeft = [y + 1, x - 1]
    let downRight = [y - 1, x + 1]
    let downLeft = [y - 1, x - 1]
while(mapHisory[mapHisory.length] !== mapHisory[mapHisory.length]) {

    for(let item of text){
      if(item === floor) {} //floor dont change nobody sits on the floor
      if(item === empty){} // && noOccupiedAdjacent ) { item = occupied}
      if(item === occupied){}// && OccupiedAdjacent >= 4) {item = empty}
      newMap.push(item)
      console.log(item)
    }
    mapHisory.push(newMap);
  }
}
}

export { Day11 };

// incorrect guesses
// 

// correct 
// 