import Form from "./Form";
import FactDisplay from "./FactDisplay";
import {useState} from 'react';
import Popup from "./Popup";


const Main = ()=>{   
    const[fact,setFact]=useState("")
    const[poster, setPoster]=useState("")
    const[showName, setShowName]=useState("")
    const[rating, setRating]=useState("")
    const[genre,setGenre]=useState("")
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);


    const closeButtonClick =()=>{
        setIsPopUpOpen(false);
    }

    

    const handleClick = (event, userShow)=> {
        event.preventDefault();
        // clear the form after submit
        event.target.reset("");

        

        fetch(`https://api.tvmaze.com/search/shows?q=${userShow}`
        ).then(response => {
                return response.json();
            })
            .then(res => {
                setShowName(res[0].show.name);
                setPoster(res[0].show.image.medium);
                setFact((res[0].show.summary).replace(/<[^>]*>/g, ''));
                setRating(res[0].show.rating.average)
                setGenre(res[0].show.genres)
            }) 
            .catch((res)=>{
                if(res !== userShow || res === ''){
                    // alert(`Are you sure you type in the right name?`);
                    setIsPopUpOpen(true);
                    
                }
            })
    }

    return(
        <>
        <Form  className="formsection" handleClick={handleClick} />
            
        {/* only when showName is truthy, then display FactDisplay compenent */}
        
        {
            showName 
            &&  <FactDisplay showName={showName} funFact={fact} poster={poster} rating={rating} genre={genre} />

        }
        
        {
                isPopUpOpen && <Popup closeButtonClick={closeButtonClick}/>

        }
        
            
        </>
    )
}

export default Main;