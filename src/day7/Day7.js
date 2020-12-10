import React from "react";
import text from "./day7-data.js";
//import text from "./day7-test-data.js";

class Day7 extends React.Component {
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
    let bags = [];
    let bag = undefined;
    let pattern = String.raw`\d+\s\w+\s\w+\s\w+`;
    let regEx = new RegExp(pattern, "g");
    let myBagName = 'shiny gold';

    for (let rule of text) {
      let innerBags = [];

      let rawInnerBags = rule.match(regEx);
      if (rawInnerBags !== undefined && rawInnerBags !== null) {
        for (let match of rawInnerBags) {
          let bagCount = match.match(String.raw`\d*`)[0].trim();
          let bagDesc = match.match(String.raw`\s\w+\s\w+`)[0].trim();
          for (let i = 0; i < bagCount; i++) {
            innerBags.push({
              name: bagDesc,
            });
          }
        }
      }

      bag = {
        name: rule.split("bag")[0].trim(),
        bags: innerBags,
      };

      bags.push(bag);
    }
    this.result = [...new Set(this.findParentBags([myBagName], bags, []))].length;
    
  }

  findParentBags(childBagNames, bags, containerBagNames){

    let filteredNames = [];
    for(let childBagName of childBagNames){
    let filtered = bags
    .filter(bag => bag.bags
      .filter(childBag => childBag.name === childBagName)[0] !== undefined);
      filteredNames = filteredNames.concat(filtered.map(item => item.name));
    }

    let parentCountResult;
    if (filteredNames.length > 0) {
      parentCountResult = this.findParentBags([...new Set(filteredNames)], bags, containerBagNames.concat(filteredNames));
    } else {
      return containerBagNames;
    }
    return parentCountResult;
  }
}

export { Day7 };

// incorrect guesses
// 12
// 1127 too high
// 1062 too high

// correct
//
