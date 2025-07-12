//I need to count the number of photos in the local repo and print that many img in a loop

const ArtistProfile = (props) =>{
    return(
        <>
            <h1 className="artistName">{props.currentArtist.name} <span className="artistsPronouns">({props.currentArtist.pronouns})</span></h1>
            <img className="profilePhoto" src={require(`../assets/artists/${props.currentArtist.name}/${props.currentArtist.profilePhoto}`)} alt={props.currentArtist.name} />
            <h2>{props.currentArtist.specialty}</h2>
            <div className="artistDescription">{props.currentArtist.description}</div>
            <a href={`${props.currentArtist.url}`}>{props.currentArtist.businessName}</a>

            <div className="artPhotosContainer">
            {props.currentArtist.artPhotoList.map((artPhoto,i) => {
                return(
                <div className="artPhotoDiv">
                    <img className="artPhoto" src={require(`../assets/artists/${props.currentArtist.name}/${artPhoto.fileName}`)} alt={artPhoto.description} />
                    <p className="artPhotoDescription">{artPhoto.description}</p>
                </div>
            )})}
            </div>
            
        </>
    )

}

export default ArtistProfile;