import { useState } from "react";

const Alert =()=>{
    const [isPopUpOpen, setIsPopUpOpen]= useState(false);
    
    const popUpClick =()=>{
        setIsPopUpOpen(false);
    }
    
    return(
        <div>
            {
                /* if isPopUpOpen === true, show popup(alert)   */
                isPopUpOpen && <Alert />
            } 
            <p>Are you sure you type in the right name?</p>
            <button onclick={popUpClick}>close</button>
        
        </div > 
    );
}
export default Alert;


// if res !== userShow
