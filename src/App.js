import './App.css';
import '../src/style.css'
import '../src/App.css'
import '../src/styleSheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Order from './components/order';
import Api_explore from './components/api_explore';


function App() {

  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home/> } />
          <Route path ='/about' element={<About/>} />
          <Route path ='/order' element={<Order/>} />
          <Route path ='/api_explore' element={<Api_explore/>} />
          <Route path ="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
