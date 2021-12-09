import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import homeLogo from '../assets/img/home-button.png'

import useStyles from './style';

export const Navigation = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolBar}>
                <Typography component={Link} to="/" variant="h6" className={classes.title}>
                    <img src={homeLogo} alt="logo" height="50px" className={classes.image} />
                </Typography>
                
            </Toolbar>
        </AppBar>
    )
}


