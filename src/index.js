import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Day4 } from "./day4/Day4";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Day4></Day4>
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
