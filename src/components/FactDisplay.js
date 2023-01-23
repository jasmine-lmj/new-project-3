const FactDisplay = ({showName, funFact,poster})=>{
    // console.log(props)
    return (
        <>
        
        <div className="factContainer wrapper">
            <div className="imgContainer">
                <img src={`${poster}`} alt="" />
            </div>
            <div className="showDetail">
                <h3>{`${showName}`}</h3>
                <div className="summaryContainer">
                    {`${funFact }`}
                </div>
            </div>
            
        </div>
        
        </>
        

    )
}
export default FactDisplay;