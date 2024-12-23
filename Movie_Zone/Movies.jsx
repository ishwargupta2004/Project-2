import React, { useState } from 'react'
import {movies} from './data.js'

const Movies = () => {
    const [movieList, setmovieList] = useState(movies)

    const filteredData=(cat)=>{
        setmovieList(movies.filter((data)=>data.category==cat))
    }

  return (
    <>
    
<div className='btns'>
<button type="button" onClick={()=>setmovieList(movies)} className="btn btn-outline-primary">All</button>
<button type="button" onClick={()=>filteredData("Action")} className="btn btn-outline-secondary">Action</button>
<button type="button" onClick={()=>filteredData("Thriller")} className="btn btn-outline-success">Thriller</button>
<button type="button" onClick={()=>filteredData("Drama")} className="btn btn-outline-danger">Drama</button>
<button type="button" onClick={()=>filteredData("Horror")} className="btn btn-outline-warning">Horror</button>
<button type="button" onClick={()=>filteredData("Animation")} className="btn btn-outline-info">Animation</button>
<button type="button" onClick={()=>filteredData("Sci-Fi")} className="btn btn-outline-light">Sci-Fi</button>
</div>

<div className='total'>

    {movieList.map((dolly)=>(
        <div className='box'>
<div className='photo'>
    <img src={dolly.poster_path} alt="" />
</div>

<div className='details'>
    <h3>{dolly.title}</h3>
    <p>{dolly.release_date}</p>
</div>

        </div>
    ))}
</div>

    </>
  )
}

export default Movies