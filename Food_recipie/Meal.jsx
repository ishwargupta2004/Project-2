import React, { useEffect, useState } from 'react'

const Meal = () => {
const [mealData, setmealData] = useState([]);
const [area, setArea] = useState('indian');
const [inputData, setinputData] = useState('');

useEffect(() => {
  const fetchData=async()=>{

    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data=await api.json();

setmealData(data.meals);

  };
  fetchData();
}, [area]);

const submitHandler=async(e)=>{
e.preventDefault();

const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`);
const data=await api.json();

setmealData(data.meals);

setinputData('')
}

  return (
    <>

<div className='btns'>
<button type="button" onClick={()=>setArea("Indian")} className="btn btn-outline-primary">Indian</button>
<button type="button" onClick={()=>setArea("Canadian")} className="btn btn-outline-secondary">Canadian</button>
<button type="button" onClick={()=>setArea("american")} className="btn btn-outline-success">American</button>
<button type="button" onClick={()=>setArea("thai")} className="btn btn-outline-danger">Thai</button>
<button type="button" onClick={()=>setArea("British")} className="btn btn-outline-warning">British</button>
<button type="button" onClick={()=>setArea("russian")} className="btn btn-outline-info">Russian</button>
</div>

<form onSubmit={submitHandler} className='search'> 
  <input onChange={(e)=>setinputData(e.target.value)} type="text" />
</form>

    <div className='total'>
{mealData.map((dolly)=>(
<div>

  <div className='photos'>
    <img src={dolly.strMealThumb} alt="" />
  </div>

<div className='details'>
<h5> {dolly.strMeal}  </h5>
</div>

  </div>
))}
</div>

    </>
  )
}

export default Meal