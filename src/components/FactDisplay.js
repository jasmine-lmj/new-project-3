const FactDisplay = ({showName, funFact,poster,rating,genre})=>{
    return (
        <div className="factContainer">
            <div className="imgContainer"> 
                <img src={`${poster}`} alt={`Poster of ${showName}`}/>
            </div>

            <div className="showDetail wrapper">
                <h3 className="showName">{`${showName}`}</h3>
                <p className="rating">{`Rating: ${rating}`}</p>
                <p className="genre">{`Genre: ${genre}`}</p>
                <p className="factParagraph">{`${funFact }`}</p> 
            </div>
        </div>
        
        
        

    )
}
export default FactDisplay;