import Form from "./Form";
import FactDisplay from "./FactDisplay";
import {useState} from 'react';

const Main = ()=>{   
    const[fact,setFact]=useState("")
    const[poster, setPoster]=useState("")
    const[showName, setShowName]=useState("")
    
    let htmlRegexG = `<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>`;
    fact.replace(htmlRegexG, ''); 


    const handleClick = (event, userNumber)=> {
        event.preventDefault();

        // The initial api is not working because it's causing cors issue. Had to use a https api.
        // console.log(userNumber)
        // fetch(`http://numbersapi.com/${userNumber}?json`)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(res => {
        //         // console.log(res)
        //         setFact(res.text);
        //     }) 

        fetch(`https://api.tvmaze.com/search/shows?q=${userNumber}`
        ).then(response => {
                return response.json();
            })
            .then(res => {
                setShowName(res[0].show.name);
                setPoster(res[0].show.image.medium);
                setFact(res[0].show.summary);
            }) 
    }


    return(
        <>
        <Form  className="formsection" handleClick={handleClick} />
        <FactDisplay  showName= {showName} funFact={fact} poster={poster} />
        </>
    )
}

export default Main;