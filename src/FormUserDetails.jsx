import React from "react";
import { Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

function FormUserDetails(props){

    function handleChange(event){
        const {name,value}=event.target;
        props.setValue(name,value);
        
    }

    return(
        <div>
        <h2> Form User Details </h2>
        <FormControl >
        <Input onChange={handleChange}  name="fname" type="text" placeholder="First Name"/>
        <Input onChange={handleChange} name="lname" type="text" placeholder="Last Name"/>
        <Input onChange={handleChange} name="email" type="text" placeholder="Email"/>
         </FormControl>
        </div>
        
         )
}

export default FormUserDetails;