import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Home extends Component {
  render() {
    console.log();
    return (
      <div>
        <AppBar color="secondary" position="fixed">
          <Toolbar>
            <Typography variant="h4">Engage</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Home;
