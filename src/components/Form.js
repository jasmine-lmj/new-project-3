import { useState } from "react";

const Form =({handleClick})=>{
    const [userNum, setUserNum] = useState(null);
    
    const handleChange = (event)=>{
        setUserNum(event.target.value) ; 
    }
    return(
        <>
        <h2>Have a flavor of the show before binging!</h2>
        <form action="" onSubmit={(event) =>{handleClick(event,userNum)}}>
            <input type="text" id="searchInput" placeholder="Search a show here" onChange={(event)=>{handleChange(event)}}/>      
            <button type="submit"> Show me the fun facts!</button>

        </form>

        </>
        
    )
}
export default Form ; 