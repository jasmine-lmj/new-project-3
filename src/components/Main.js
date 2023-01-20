import Form from "./Form";
import FactDisplay from "./FactDisplay";
import {useState} from 'react';
// import axios from 'axios';

const Main = ()=>{   
    const[fact,setFact]=useState("")
    const[poster, setPoster]=useState("")

    const handleClick = (event, userNumber)=> {
        event.preventDefault();

        // The initial api is not working because it's causing cors issue. Had to use other https api.
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
                // console.log(res[0].show.summary)
                setFact(res[0].show.summary);
                setPoster(res[0].show.image.medium)
            }) 
    }

    // // Remove all tags from a string
    // var htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    // '<html><body>Hello, <b>world</b>!<br /></body></html>'.replace(htmlRegexG, ''); // returns 'Hello, world';
    


    return(
        <>
        <Form  className="formsection" handleClick={handleClick} />
        <FactDisplay  funFact={fact} poster={poster} />
        </>
    )
}

export default Main;