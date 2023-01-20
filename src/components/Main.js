import Form from "./Form";
import FactDisplay from "./FactDisplay";
import {useState} from 'react';
// import axios from 'axios';

const Main = ()=>{   
    const[fact,setFact]=useState("")

    const handleClick = (event, userNumber)=> {
        event.preventDefault();
        console.log(userNumber)
        fetch(`http://numbersapi.com/${userNumber}?json`)
            .then(response => {
                return response.json();
            })
            .then(res => {
                // console.log(res)
                setFact(res.text);
            }) 
    }


    return(
        <>
        <Form  className="formsection" handleClick={handleClick} />
        <FactDisplay  funFact={fact} handleClick={handleClick}/>
        </>
    )
}

export default Main;