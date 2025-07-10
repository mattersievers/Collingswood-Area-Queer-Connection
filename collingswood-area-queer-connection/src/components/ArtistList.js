const ArtistList = (props) => {
    return(
        <>
            <ul>   
            {props.artists.map((artist,i) => (
                <li key={i}>
                    <span
                        onClick={ () => {
                            props.setCurrentPageSelection('Artist')
                            props.setCurrentArtist(artist.name)
                        }}>
                    {artist.name}
                    </span>
                </li>
            ))}  
            </ul>
        </>
    )
}

export default ArtistList;