import React ,{useEffect} from "react";

const AppNavBar = (props) =>{
    
    useEffect(() => {
        props.currentPageSelection === 'Artist Of The Month' || props.currentPageSelection === 'Artist'?(
            document.title = "CAQC AotM " + props.currentArtist):(
            props.currentPageSelection === 'Artist'?(
                document.title = "CAQC AotM " + props.currentArtist
                ):(    
                document.title = 'CAQC ' + props.currentPageSelection));
    })
    return(
        <>
        <div className="navigationBar">
            <h1 onClick={ () => props.setCurrentPageSelection('Artist Of The Month')}>Collingswood Area Queer Connection</h1>
            <div onClick={ () => props.setCurrentPageSelection('Artist List')}>Artist List</div>
            <div onClick={ () => props.setCurrentPageSelection('Contact')}>Contact</div>
        </div>    
        </>
  );
}

export default AppNavBar;