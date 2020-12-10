import React from "react";
import text from "./day8-data.js";
//import text from "./day8-data-test.js";

class Day8 extends React.Component {
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
    
    let accumulator = 0;
    let cmds = [];
    let currCmdIndex = 0;
    let nextCmdIndex = 0;
    let currCmd;

    for(let line of text) {
    let command = {'cmd':line.split(' ')[0],
    'pos':line.split(' ')[1].match(String.raw`\D`)[0] === '+',
    'num':Number(line.split(' ')[1].match(String.raw`\d+`)[0]), 'hasRun':false};
    if(isNaN(command.num)){
      console.log(line.split(' ')[1].match(String.raw`\d+`)[0]);
    }
    cmds.push(command);

    }

    for(let i = 0; i < cmds.length; i++) {
      currCmd = cmds[currCmdIndex];
      if(currCmd === undefined){
        this.result = accumulator; 
        break;
      }
      if(currCmd.hasRun === true){
        console.log(currCmdIndex)
        this.result = accumulator; 
        break;
      }
      if(currCmd.cmd === 'nop') { nextCmdIndex = currCmdIndex + 1;}
      if(currCmd.cmd === 'acc') { 
        if(currCmd.pos){
        accumulator = accumulator + currCmd.num;
      } else {
        accumulator = accumulator - currCmd.num;
      } 
        nextCmdIndex = currCmdIndex + 1
      }
      if(currCmd.cmd === 'jmp') {
        let moveBy = currCmd.pos ? currCmd.num : -currCmd.num;
        nextCmdIndex = currCmdIndex + moveBy}
      currCmd.hasRun = true;

      currCmdIndex = nextCmdIndex;
    }
    console.log(accumulator);
  }
}

export { Day8 };

// incorrect guesses
// 2
// 228 low

// correct 
// 1744