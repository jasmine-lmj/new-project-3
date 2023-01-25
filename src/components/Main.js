import Form from "./Form";
import FactDisplay from "./FactDisplay";
import {useState} from 'react';

const Main = ()=>{   
    const[fact,setFact]=useState("")
    const[poster, setPoster]=useState("")
    const[showName, setShowName]=useState("")
    
    const handleClick = (event, userNumber)=> {
        event.preventDefault();

        fetch(`https://api.tvmaze.com/search/shows?q=${userNumber}`
        ).then(response => {
                return response.json();
            })
            .then(res => {
                setShowName(res[0].show.name);
                setPoster(res[0].show.image.medium);
                setFact((res[0].show.summary).replace(/<[^>]*>/g, ''));
            }) 
            .catch((res)=>{
                if(res !== userNumber){
                    alert(`Are you sure you type in the right name?`);
                }else{;
                    alert('testing')
                }
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