import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "DarkGreen", marginBottom: "5em"}}>
        <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
        BTFC
        </Typography>
          
            <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleMenu}
                >

                <AccountCircle />
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
                <MenuItem href="../" component="a" onClick={handleClose}>Home</MenuItem>
                <MenuItem href="../Programs" component="a" onClick={handleClose}>Programs</MenuItem>
                <MenuItem href="../Registration" component="a" onClick={handleClose}>Registration</MenuItem>
                <MenuItem href="../Contact" component="a" onClick={handleClose}>Contact Us</MenuItem>
                <MenuItem href="../Results" component="a" onClick={handleClose}>Race Results</MenuItem>
                <MenuItem href="../Directors" component="a" onClick={handleClose}>Board of Directors</MenuItem>
            </Menu>
        </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}