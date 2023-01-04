import '../styles/addFvrt.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const AddFavourites = () => {
    let handleSubmit=(e)=>{
       e.preventDefault();
       let data={title,genere,language,rating}
    //    console.log(data);
    //    console.table(data);
       fetch("http://localhost:4500/favorites",{
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify(data)
    })
    alert("Movie added Sucessfully")
    navigate('/movies')
    }
    let [title,setTitle]=useState("")
    let [genere,setgenere]=useState("")
    let [language,setlanguage]=useState("")
    let [rating,setrating]=useState("")
    let navigate=useNavigate()
    let reset=()=>{
        setTitle("")
        setgenere("")
        setlanguage("")
        setrating("")
    }
    return ( 
        <div className="addfvrt">
            <h1 style={{textAlign:'center'}} >Add to Favourites</h1>
            <div className="form">
                <div className="formimage">
                    <img height="500" width="400" src="https://thumbs.dreamstime.com/b/movie-hollywood-popcorn-night-film-reel-64235242.jpg" alt="" />
                </div>
                <div className="form_input">
                    <form action="" onSubmit={handleSubmit} >
                        <div className="title">
                            <input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                        </div>
                        <div className="genere">
                            <input type="text" placeholder="Enter the genere of movie" value={genere} onChange={(e)=>setgenere(e.target.value)} />
                        </div>
                        <div className="language">
                            <input type="text" placeholder="enter language" value={language} onChange={(e)=>setlanguage(e.target.value)} />
                        </div>
                        <div className="rating">
                            <input type="text" placeholder="Enter rating" value={rating} onChange={(e)=>setrating(e.target.value)} />
                        </div>
                        <button type='submit' >Add to Favourites</button>
                        <button id='btn1' type='reset' onClick={reset} >Reset</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddFavourites;