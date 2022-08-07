const ArtistCard = (props) => {
    console.log(props)
    return (
        <div key={props.artWork.id}>
            <h1>{props.artWork.artist_title}</h1>
            <img src={`https://www.artic.edu/iiif/2/${props.artWork.image_id}/full/843,/0/default.jpg`} alt={props.artWork.title}></img>
        </div>
    )
}

export default ArtistCard
