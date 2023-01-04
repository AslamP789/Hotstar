import './App.css';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Movies from './components/movies';
import Footer from './components/footer';

import Celebrities from './components/celebrities';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PageNotFound from './components/404';
import AddFavourites from './components/addFvrt';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Navbar/>
       <Routes>

          <Route path='/' element={<Homepage/>}/>

          <Route path='/movies' element={<Movies />}/>

          <Route path='/celebrities' element={<Celebrities/>} />

          <Route path='/addFvrt' element={<AddFavourites />}/>

          <Route path='*' element={<PageNotFound/>} />
       
       </Routes>

      <Footer/>
     
     </BrowserRouter>








      {/* <Navbar/>
      <Homepage/>
      <Movies/>
      <Celebrities/>
      <Footer/> */}
      
     
    </div>
  );
}

export default App;
