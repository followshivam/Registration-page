import React from "react";
import GradeIcon from '@material-ui/icons/Grade';

function Footer(){
    const date=new Date().getFullYear();

    return(
        <div class="footer">
        <h1 > Made by Shivam <GradeIcon/> {date}  </h1>
        </div>
    )
}

export default Footer;