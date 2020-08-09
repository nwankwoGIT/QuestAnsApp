import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

const GoogleHeader = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className="text-center" color="inherit">
                My React App
      </Typography>
        </Toolbar>
    </AppBar>
);

export default GoogleHeader;