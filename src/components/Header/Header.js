import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function DenseAppBar() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
            COVID-19 TRACKER
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}