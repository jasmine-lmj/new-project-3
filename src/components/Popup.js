import { useState } from "react"

const Popup = ({closeButtonClick})=>{

    // if user didn't type in search term and hit enter, isPopUpOpen is set to be true, then popup alert message "Please enter a show name in the search bar!"
    // if API call has no exact search term, popup alert message"Are you sure you put the right name in ?"



    return(
        <>
        <div className="alertMessageContainer">
            <p className="alertMessage">Please enter a show name in the search bar!</p>
            <button onClick={closeButtonClick}>close</button>
        </div>

        {/* <div className="alertMessageContainer wrongSearchTerm">
            <p className="alertMessage">Are you sure you put the right name in ?</p>
            <button onClick={closeButtonClick}>close</button>
        </div> */}

        </>
    )
}
export default Popup ; 