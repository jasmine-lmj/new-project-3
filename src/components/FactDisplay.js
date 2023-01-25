const FactDisplay = ({showName, funFact,poster})=>{
    return (
        <>
        <div className="factContainer wrapper">
            <div className="imgContainer">
                    <img src={`${poster}`} alt={`${showName}`}/>
            </div>
            <div className="showDetail">
                <h3>{`${showName}`}</h3>
                <div className="summaryContainer">
                    <p>{`${funFact }`}</p> 
                </div>
            </div>
            
        </div>
        
        </>
        

    )
}
export default FactDisplay;