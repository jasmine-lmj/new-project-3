import { useState } from "react";

const Form =({handleClick})=>{
    const [userNum, setUserNum] = useState(null);
    
    const handleChange = (event)=>{
        setUserNum(event.target.value) ; 
    }
    return(
        <>
        <h2>Search that number and learn fun facts about it! </h2>
        <form action="" onSubmit={(event) =>{handleClick(event,userNum)}}>
            {
                <input type="text" id="searchInput" placeholder="Search a number here" onChange={(event)=>{handleChange(event)}}/>   
            }
            <button type="submit"> Show me the number fun facts!</button>
        </form>
        </>
        
    )
}
export default Form ; 