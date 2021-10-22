import React,{useState} from 'react'
 import StarRatingComponent from 'react-star-rating-component';


const Search = ({search,setRate,newRate}) => {
    // const [rating, setRating] = useState(1)
    // const onStarClick=(nextValue, prevValue, name)=> {
    //     setRate(nextValue);
    //   }
    const [newMovie, setNewMovie] = useState({
      title:"",
      rate:1,
      duration:"",
      genre:"",
      main_img:"",
      description:""
  })
  const onStarClick = (nextValue, prevValue, name) =>{
    setNewMovie({...newMovie,rate:nextValue})
}
    return (
        <div>
            <input type="text" placeholder="search" onChange={(e)=>search(e.target.value)}/>
            <button>search a movie</button>
            {/* <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
        /> */}
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
           value={newMovie.rate}
           onStarClick={onStarClick}
        />
        </div>
    )
}

export default Search
