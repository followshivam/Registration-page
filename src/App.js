import React ,{useState} from "react";
import './App.css';
import Header from "./Header.jsx"
import FormUserDetails from "./FormUserDetails.jsx"
import FormPersonalDetails from "./FormPersonalDetails.jsx"
import Confirm from "./Confirm.jsx"
import Success from "./Success.jsx"
import Footer from "./Footer.jsx"
import { Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';




function App() {
  const [state,setState]=useState(0);
  const[data,setData]=useState({
    fname:"",
    lname:"",
    email:"",
    occupation:"",
    city:"",
    bio:""
  });

  function setValues(name,value){    
    setData((prevValues)=>{
      return {
        ...prevValues, [name]:value
      }
    }
    )                
  }
    
  function increaseState(event){
    setState((state+1));
    event.preventDefault();    
    {state===3 && setState(0)}
  } 

  function decreaseState(event){ 
    {state===1?valuesReset():valuesReset2()}
    setState((state-1));
    event.preventDefault();    
  }

  function resetState(event){      
    setState(0);
    window.location.reload(false);
  } 

  function valuesReset(){
     setData((prevValues)=>{
      return {
        ...prevValues, fname:"" ,lname:"",email:""
      }}) 
     }
     
  function valuesReset2(){
    setData((prevValues)=>{
     return {
       ...prevValues, occupation:"" ,city:"",bio:""
     }}) 
    }

    
  return (
    <div>
    <Header/>

    {state===0? <div> <FormUserDetails
      fname={data.fname} lname={data.lname} email={data.email} setValue={setValues}
    /> </div>
    :[
      state===1? <div> <FormPersonalDetails
       occupation={data.occupation} city={data.city} bio={data.bio} setValue={setValues}
      /> </div> 
      : [
        
        state===2? <div> <Confirm 
        fname={data.fname} lname={data.lname} email={data.email}
        occupation={data.occupation} city={data.city} bio={data.bio}  
        /> </div> 
      : <div> <Success/> </div>
      ]
      ]
     
    }
    <Zoom in={true}>
         <form>
            {state!==3?<Button color="primary" onClick={increaseState}> Confirm </Button>:null}
            {state!==0 && state!==3?<Button color="primary" onClick={decreaseState}> Go Back </Button>:null}            
            {state===3?<Button color="primary" onClick={resetState}> Go to Home Page </Button>:null}
         </form>
    </Zoom>

    <Footer/>
    

    </div>

  );
}

export default App;
