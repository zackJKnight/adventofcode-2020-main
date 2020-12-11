import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Day11 } from "./day11/Day11";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Day11></Day11>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
