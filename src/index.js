import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Day9 } from "./day9/Day9";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Day9></Day9>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
