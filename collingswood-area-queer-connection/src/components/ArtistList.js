const ArtistList = (props) => {
    return(
        <>
            <ul>   
            {props.artists.map((artist,i) => (
                <li key={i}>
                    <span
                        className="artistCard"
                        onClick={ () => {
                            props.setCurrentPageSelection('Artist')
                            props.setCurrentArtist(artist)
                        }}>
                    <div className="rainbowBorder"><img className="profilePhoto" src={require(`../assets/artists/${artist.name}/${artist.profilePhoto}`)} alt={artist.name} /></div>
                    {artist.name}
                    </span>
                </li>
            ))}  
            </ul>
        </>
    )
}

export default ArtistList;