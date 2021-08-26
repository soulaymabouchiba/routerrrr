import { useState } from 'react';
import MovieData from '../Data';
import { MovieList } from './MovieList';
import Filter from './Filter';
import AddModal from './AddMovie';






function Navigation() {
  const [movies, setMovies]=useState(MovieData);
  const [FilterTitel,setFilterTitel]= useState("");
  const [FilterRating,setFilterRating]= useState(0)

  return (
    
     
    <div className="App">
      <header className="App-header">
     
     
      <Filter  setFilterRating={setFilterRating}  FilterRataing={FilterRating} setFilterTitel={setFilterTitel} />
      <AddModal setMovies={setMovies} movies={movies} />
      <MovieList FilterRating={FilterRating} FilterTitel={FilterTitel} movies={movies} />
      
     
      </header>
    </div>
    
  );
}

export default Navigation;