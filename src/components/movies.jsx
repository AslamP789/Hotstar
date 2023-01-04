import { useState,useEffect } from 'react';
import '../styles/movies.css'
import Moviesprob from './moviesprob';
const Movies=()=>{
//   let favourites=[
//  {
//     title:"The Boys",
//     genere:"Action",
//     language:"English",
//     rating:4.2,
//     id:1
//   },
//   {
//     title:"Dark",
//     genere:"Action",
//     language:"Hindi",
//     rating:4.5,
//     id:2
//   },
//   {
//     title:"The Rose",
//     genere:"Action",
//     language:"English",
//     rating:3.5,
//     id:3
//   },
//   {
//     title:"Malgudi days",
//     genere:"Action",
//     language:"Malayalam",
//     rating:3.2,
//     id:4
//   },
//   {
//     title:"Loki",
//     genere:"Action",
//     language:"English",
//     rating:4.5,
//     id:5
//   },
// ]
let [Fvrt,setFvrt]=useState([])
useEffect(()=>{
   let fetchdata=async()=>{
      let response=await fetch("http://localhost:4500/favorites")
      let data=await response.json();
      setFvrt(data)
   }
   fetchdata();
},[])
let as=(id,title)=>{
  setFvrt(Fvrt.filter(x=>x.id!==id))
  alert(`${title} removed`)
}
return(
   <div className="movies1">
    <Moviesprob title="Favorites OF All Time" data1={Fvrt} data2={as} />
    <Moviesprob title="Top Rated Movie" data1={Fvrt.filter(x=>x.rating>=4)} data2={as} />
    <Moviesprob title="Favourite Language" data1={Fvrt.filter(x=>x.language==="Malayalam")} data2={as} />

   </div>
   
);

}

export default Movies;