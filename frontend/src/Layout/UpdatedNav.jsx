import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

import homeLogo from '../assets/img/home-button.png';
import menuLogo from '../assets/img/burger-button.png';
import useStyles from './style';


export const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            component={Link}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={homeLogo} alt="homeLogo" className={classes.image} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img src={menuLogo} alt="MenuLogo" className={classes.image} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/concept" onClick={handleClose}>Hvad er Århus Duck Race?</MenuItem>
                <MenuItem component={Link} to="/buy" onClick={handleClose}>Køb din and her</MenuItem>
                <MenuItem component={Link} to="/donate" onClick={handleClose}>Donér til os her</MenuItem>
                <MenuItem component={Link} to="/event" onClick={handleClose}>Hvor foregår det?</MenuItem>
                <MenuItem component={Link} to="/prizes" onClick={handleClose}>Præmier</MenuItem>
                <MenuItem component={Link} to="/purpose" onClick={handleClose}>Formål</MenuItem>
                <MenuItem component={Link} to="/aboutus" onClick={handleClose}>Om os</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
