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
  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleUserMenu = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleUserClose = () => {
    setAnchorE2(null);
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
                >

                <AccountCircle />
            </IconButton>
              
            
            <Menu
                id="menu-appbar"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorE2)}
                onClose={handleUserClose}
            >
                <MenuItem href="../Messages" component="a" onClick={handleUserClose}>Messages</MenuItem>
                <MenuItem href="../Requests" component="a" onClick={handleUserClose}>Requests</MenuItem>
                <MenuItem href="../Friends" component="a" onClick={handleUserClose}>Friends</MenuItem>
            </Menu>
        </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}