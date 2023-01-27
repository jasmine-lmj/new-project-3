const FactDisplay = ({showName, funFact,poster,rating,genre})=>{
    return (
        <div className="factContainer">
            <div className="imgContainer"> 
                <img src={`${poster}`} alt={`Poster of ${showName}`}/>
            </div>

            <div className="showDetail ">
                <h3>{`${showName}`}</h3>
                <p>{`Rating: ${rating}`}</p>
                <p>{`Genre: ${genre}`}</p>
                <p>{`${funFact }`}</p> 
            </div>
        </div>
        
        
        

    )
}
export default FactDisplay;