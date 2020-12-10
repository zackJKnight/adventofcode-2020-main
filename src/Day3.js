import React from "react";
import text from "./data.js";
//import text from "./day3-test-data.js";

class Day3 extends React.Component {
  moveX = 3;
  moveY = 1;
  result = 0;
  text = text.replace(/(\r\n|\n|\r)/gm, "");
  lineLength = this.prepData(text);
  textAsArray = text.split('').map(i => i.replace(/(\r\n|\n|\r)/gm, ""));
  render() {
    return <div>
      <button onClick={this.countTrees(this.textAsArray, this.lineLength)}><h1>{this.result}</h1>
      </button>
    </div>;
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

    while(index < filteredtext.length) {
      startIndex = Math.floor(index / lineLength) * lineLength
      endIndex = startIndex + lineLength - 1;
      
      lineIndex = index - startIndex;
      nextLineIndex = lineIndex + this.moveX
      if(nextLineIndex > lineLength - 1) {
        nextLineIndex -= lineLength; 
      }
      index = endIndex + 1 + nextLineIndex;
      if(index > filteredtext.length){
        console.log(`final line index was ${index}`)
        break;
      }
      let checkSpot = filteredtext.slice(index, index + 1);
      if(checkSpot[0] === '#') {
          matchCount ++;
      }else if(checkSpot[0] === '.'){
        console.log('no tree')
      } else {
        console.log(`what is this ${checkSpot[0]}`)
        break;
      }

      console.log(index)
//      console.log(`row ${text.length / lineLength}, col ${}`)
      console.log(`${filteredtext.length} text len`)

    }
    this.result = matchCount;
  }


}

export { Day3 };

// incorrect guesses
// 95
// 107
// 88
// 89
// 94
// 73
// 1011
// 160
// 96