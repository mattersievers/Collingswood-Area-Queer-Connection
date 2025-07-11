import React ,{useEffect} from "react";
import artists from "../utils/artistListDetails";

const AppNavBar = (props) =>{
    
    useEffect(() => {
        props.currentPageSelection === 'Artist Of The Month'?(
            document.title = "Monthly Artist " + props.currentArtist.name + "'s Profile"):(
            props.currentPageSelection === 'Artist'?(
                document.title = props.currentArtist.name +"'s Profile"  ):(    
                document.title = props.currentPageSelection));
    })
    return(
        <>
        <div className="navigationBar">
            <img className="logoImg" onClick={ () => {props.setCurrentPageSelection('Artist Of The Month'); props.setCurrentArtist(artists[props.artistOfTheMonthNumber]);}} src={require(`../assets/CAQC Logo 1.png`)} alt="CAQC Logo"/>
            <div className ="pageSelect" onClick={ () => props.setCurrentPageSelection('Artist List')}>Artists</div>
            <div className ="pageSelect lastOption" onClick={ () => props.setCurrentPageSelection('Contact Us')}>Contact</div>
        </div>    
        </>
  );
}

export default AppNavBar;