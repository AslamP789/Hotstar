const Moviesprob = (props) => {
    let Fvrt=props.data1
    let as=props.data2
    let header=props.title

    return ( 
        <div className="movies">
        <h1>{header}</h1>
       
            {
                Fvrt.map((data)=>(
                    <div className="favs_link">   
                    <h2>{data.title}</h2>
                    <p>{data.language}/{data.genere} </p>
                    <p> {data.rating} ⭐</p>
                    <button onClick={()=>as(data.id,data.title)}  >remove</button>
                   </div>
                   
                ))
                
            }
            
        </div>
     );
}
 
export default Moviesprob;