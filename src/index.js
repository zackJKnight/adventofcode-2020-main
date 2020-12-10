import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Day10 } from "./day10/Day10";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Day10></Day10>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
