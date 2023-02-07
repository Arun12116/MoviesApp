import {Routes ,Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Deatiles from './Pages/Deatiles';
import Search from './Pages/Search';
import Notfound from './Pages/Notfound';
function App() {
  return (
<main>

<Navbar/>
<Routes>
<Route  path='/Home' element={<Home/>} />
<Route  path='/Search' element={<Search/>} />
<Route  path='/Deatiles/:id' element={<Deatiles/>} />
<Route  path='*' element={<Notfound/>} />
</Routes>
<Footer/>
  
</main>
  );
}

export default App;
