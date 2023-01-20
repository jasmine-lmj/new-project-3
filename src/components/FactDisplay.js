const FactDisplay = ({funFact,poster})=>{
    // console.log(props)
    return (
        <>
        
        <div className="factContainer">
            {`${funFact}`}
            <img src={`${poster}`} alt="" />
        </div>
        
        </>
        

    )
}
export default FactDisplay;