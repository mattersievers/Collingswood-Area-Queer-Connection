const ArtistList = (props) => {
    return(
        <>
            <ul>   
            {props.artists.map((artist,i) => (
                <li key={i}>
                    <span
                        onClick={ () => {
                            props.setCurrentPageSelection('Artist')
                            props.setCurrentArtist(artist)
                        }}>
                    {artist}
                    </span>
                </li>
            ))}  
            </ul>
        </>
    )
}

export default ArtistList;