import { useState } from 'react';

const FactDisplay = ({funFact})=>{
    // console.log(props)
    return (
        <>
        
        <div className="factContainer">
            <p>{`${funFact}`}</p>
        </div>
        
        </>
        

    )
}
export default FactDisplay;