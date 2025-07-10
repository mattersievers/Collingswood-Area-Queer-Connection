const ArtistProfile = (props) =>{
    return(
        <>
            <h2>Here is the artist profile</h2>
            <div>Maybe we'll put some work in here</div>
            <div>And A brief synopsis about what they do</div>
            <div>{props.currentArtist}</div>
        </>
    )

}

export default ArtistProfile;