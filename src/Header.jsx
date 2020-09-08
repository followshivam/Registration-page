import React from "react";
import { AppBar,Toolbar,Typography } from '@material-ui/core';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

function Header(){
    return(
        <div class="header">
        <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" >
      <WbSunnyOutlinedIcon fontSize="large" /> Registration Form
    </Typography>
  </Toolbar>
</AppBar>

        </div>
    )
}

export default Header;