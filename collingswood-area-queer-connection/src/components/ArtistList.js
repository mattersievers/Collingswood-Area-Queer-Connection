const ArtistList = (props) => {
    return(
        <>
            <ul>   
            {props.artists.map((artist,i) => (
                <li key={i}>{artist}</li>
            ))}  
            </ul>
        </>
    )
}

export default ArtistList;