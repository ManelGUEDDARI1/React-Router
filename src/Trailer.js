import React, {useState} from 'react'

const Trailer = (props) => {
    const [movie, setMovie] = useState(props.movies.filter(el => el.id === props.match.params.id)[0])
    return (<div> {
        movie && <iframe width="727" height="409"
            src={
                movie.trailer
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    }      
    </div>
    )
        }
        
        export default Trailer
