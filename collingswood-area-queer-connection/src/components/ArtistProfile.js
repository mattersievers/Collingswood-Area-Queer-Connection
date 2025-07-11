//I need to count the number of photos in the local repo and print that many img in a loop

const ArtistProfile = (props) =>{
    
    return(
        <>
            <h1>{props.currentArtist.name}</h1>
            <img className="profilePhoto" src={require(`../assets/artists/${props.currentArtist.name}/photo_1.jpg`)} alt={props.currentArtist.name} />
            <h2>{props.currentArtist.specialty}</h2>
            <div>Maybe we'll put some work in here</div>
            <div>And A brief synopsis about what they do</div>
            
        </>
    )

}

export default ArtistProfile;