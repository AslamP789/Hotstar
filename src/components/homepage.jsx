import '../styles/homepage.css'
const Homepage = () => {
   let movie_image=[
    {
        image:"images/avathar.webp",
        
    },
    {
        image:"images/hindi.webp",
   
    },
    {
        image:"images/jhansi.webp",
     
    },
    {
        image:"images/lifeofpi.webp",
    
    },
    {
        image:"images/willow.webp",
    
    },
   ]
    return ( 
        <div className="homepage">
            <div className="banner">

                <div className="discription">
                  <p >Lorem ipsum dolor sit amet  <br /> consectetur adipisicing elit. <br /> Sunt, ipsam.</p>
                  <button>Subscribe Now</button>
                </div>
                <div className="banner_image">
                <img width={900} src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-11-25/ctp_desk-39b07654-1ec7-4897-a389-8dd23c04a6c4.jpg" alt="" />
            </div>

            </div>
            
            <div className="movie_images">
            <h1 style={{color:"white"}}> Recommended Movies</h1>
                {
                    
                    movie_image.map((data)=>(
                       
                            <img src={data.image} alt="" srcset="" />
                            
                          
                       
                    ))
                }
             
            </div>
        </div>
     );
}
 
export default Homepage;