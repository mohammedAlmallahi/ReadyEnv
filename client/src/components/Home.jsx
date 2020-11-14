import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div>
        <AppBar color="secondary" position="fixed">
          <Toolbar>
            <Typography variant="h4">Logo</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Home;

//green black and white
