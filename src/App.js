import './App.css';
import MovieList from './MovieList';
import { useState } from 'react';
import Search from './Search';
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter, Route} from 'react-router-dom'
import Description from './Description';
import Trailer from './Trailer';

function App() {
  const [keyword, setKeyword] = useState("")
  const [newRate, setNewRate] = useState(1)
  const [movies, setMovies] = useState([
{
  id:uuidv4(),
  main_img : "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
  title:"Bright",
  duration:"117 min",
  date:"2017",
  rate: 4,
  genre:"Action, Crime, Fantasy",
  description: "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
  trailer :"https://www.youtube.com/embed/6EZCBSsBxko",
},
{
  id:uuidv4(),
  main_img :"https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
  title:"Tomb Raider",
  duration:"125 min",
  date:"2018",
  rate:5,
  genre:"Action, Fantasy",
  description: " Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  trailer :"https://www.youtube.com/embed/8ndhidEmUbI",
  
},
{
  id:uuidv4(),
  main_img : "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
  title:"Black Panther",
  duration:"134 min",
  date:"2018",
  rate:3,
  genre:"Action, Adventure, Sci-Fi",
  description:"T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
  trailer:"https://www.youtube.com/embed/xjDjIWPwcPU"
  
}
  ])

  const search =(text) => {
    setKeyword(text)
  }
  const setRate= (rate) => {
setNewRate (rate)
  }
  const addMovie= (movie) => {
    setMovies({...movies,movie})
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Route path exact ="/">
      <Search search={search} setRate={setRate} newRate={newRate}/>
      <MovieList addMovie={addMovie} movies={movies.filter(el => (el.rate>=newRate) && (el.title.toUpperCase().includes(keyword.toUpperCase().trim())))} /> ;
      </Route>
      <Route
        exact
        path="/description/:id"
        render={(props) => <Description movies={movies} {...props} />}
        
      />
            <Route
        exact
        path="/trailer/:id"
        render={(props) => <Trailer movies={movies} {...props} />}
        
      />
      </BrowserRouter>
    </div>
  );
}

export default App;