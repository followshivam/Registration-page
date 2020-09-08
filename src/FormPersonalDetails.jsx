import React from "react";
import { Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';




function FormPersonalDetails(props){

    function handleChange(event){
        const {name,value}=event.target;
        props.setValue(name,value);        
    }

    return(
        <div>
        <h2> Form Personal Details </h2>
        <FormControl >
        <Input onChange={handleChange} name="occupation" type="text" placeholder="Occupation" required />
        <Input  onChange={handleChange} name="city" type="text" placeholder="City" required />
        <Input  onChange={handleChange} name="bio" type="text" placeholder="Bio" required />
         </FormControl>
        </div>
    )
}

export default FormPersonalDetails;