import { useState } from 'react';
import '../styles/celebrities.css'
const Celebrities = () => {
    let celebrity=[
        {
            image:"images/messi.jpg",
            name1:"MESSI",
            id:1
        },
        {
            image:"images/depaul.jpg",
            name1:"DEPAUL",
            id:2
        },
        {
            image:"images/neymer.jpg",
            name1:"NEYMER",
            id:3
        },
        {
            image:"images/ronaldo.jpg",
            name1:"RONALDO",
            id:4
        },
    ]
    let [image1,setimage]=useState(celebrity)
    let remove=(name1,id)=>{
        setimage(image1.filter(x=>x.id!==id))
        alert(`${name1}removed`)
    }
       
    
    return ( 
    <div className="celebrities">
        
        <h1>CELEBRITIES</h1>
        {
            image1.map((data)=>(
                <div className="list">
                <img height={200} width={200}  src={data.image} alt="" srcset="" />
                <p> {data.name1}</p>
                <button onClick={()=>remove(data.name1,data.id)} >remove</button>
                
                </div>
    ))
        }
       
    </div>
     );
}
 
export default Celebrities;