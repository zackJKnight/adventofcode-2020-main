import React from "react";
import text from "./day4-data.js";
//import text from "./day4-test-data.js";

class Day4 extends React.Component {
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
    let passports = [];
    let passportFields = this.passportFields();
    let results = text.split("\n\n");
    let passport = {};
    for (let result of results) {
      for (let field of passportFields) {
        if (field.optional === 0) {
          let search = String.raw`\S*`;
          let re = new RegExp(`${field.alias}:${search}`);
          let selectedValue = result.match(re);
          if(selectedValue){
          passport[field.alias] = selectedValue[0].split(":")[1];
          }
        }
      }
      passports.push(passport);
      passport = {};
    }
    return passports;
  }

  passportFields() {
    return [
      {
        name: "Birth Year",
        alias: "byr",
        optional: 0,
        value: 0,
      },
      {
        name: "Issue Year",
        alias: "iyr",
        optional: 0,
        value: 0,
      },
      {
        name: "Expiration Year",
        alias: "eyr",
        optional: 0,
        value: 0,
      },
      {
        name: "Height",
        alias: "hgt",
        optional: 0,
        value: 0,
      },
      {
        name: "Hair Color",
        alias: "hcl",
        optional: 0,
        value: 0,
      },
      {
        name: "Eye Color",
        alias: "ecl",
        optional: 0,
        value: 0,
      },
      {
        name: "Passport ID",
        alias: "pid",
        optional: 0,
        value: 0,
      },
      {
        name: "Country ID",
        alias: "cid",
        optional: 1,
        value: 0,
      },
    ];
  }

  countMatches(text) {
    let matches = 0;

    for (let passport of text) {
      let isValid = true;

      // if (
      //   selectedValue === undefined ||
      //   selectedValue === null ||
      //   selectedValue[0].split(":")[1] === undefined
      // ) {
      //   isValid = false;
      //   console.log(`no match on ${field.name} of ${text.indexOf(passport)}`);
      // } else {
      // }

      if (isValid) {
        matches++;
      } else {
        isValid = true;
      }
    }
    this.result = matches;
  }

  validBirthYear(byr) {
    return byr.match(String.raw`\d`).length === 4 && byr >= 1920 && byr <= 2002;
  }
}

export { Day4 };

// incorrect guesses
// 1665
// 53
// 1893
