import { useState } from "react";
import Alert from "./Alert";

const Form =({handleClick})=>{
    const [userInput, setUserInput] = useState("");
    
    const handleChange = (event)=>{
        setUserInput(event.target.value) ; 
        
    }
    return(
        <>
        <h2>Have a flavor of the show before binging!</h2>
        <form action="" onSubmit={(event) =>{handleClick(event,userInput)}}>
            <input type="text" id="searchInput" placeholder="Search a show here" onChange={(event)=>{handleChange(event)}}/>      
            <button type="submit"> Show me the fun facts!</button>
        </form>
        </>
        
    )
}
export default Form ; 