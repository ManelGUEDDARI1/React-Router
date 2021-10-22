import React, {useState, useEffect} from 'react'


const Description = (props) => {
    const [movie, setMovie] = useState(props.movies.filter(el => el.id === props.match.params.id)[0]);
    // useEffect (() => {
    //       setMovie(props.movies.filter(el=>el.id===props.match.params.id)[0])
    //     })
    console.log(props)
    return (
        <div> 
            {movie && <h3>{ movie.description}</h3>}
            <button onClick={()=>props.history.goBack()}> Go Back </button>
         </div>
       
    )
}

export default Description


