import React from "react";

function Confirm(props){
    return(
        <div>
        <h2> Confirm </h2> 
        <div class="confirm">
        <p> First Name:{props.fname} </p>
        <p> Last Name: {props.lname} </p>
        <p> Email: {props.email} </p>
        <p> Occupation: {props.occupation} </p>
        <p> City: {props.city} </p>
        <p> Bio: {props.bio} </p>
        </div>
        </div>

    )
}

export default Confirm;