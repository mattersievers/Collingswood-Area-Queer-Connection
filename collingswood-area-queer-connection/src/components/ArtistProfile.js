

const ArtistProfile = (props) =>{
    
    return(
        <>
            <div>{props.currentArtist}</div>
            <img className="profilePhoto" src={require(`../assets/artists/${props.currentArtist}/photo_1.jpg`).default} alt={props.currentArtist}></img>
            {console.log(`../../assets/artists${props.currentArtist}/photo_1.jpg`)}
            <h2>Here is the artist profile</h2>
            <div>Maybe we'll put some work in here</div>
            <div>And A brief synopsis about what they do</div>
            
        </>
    )

}

export default ArtistProfile;