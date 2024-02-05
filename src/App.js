import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Home></Home>
     <Footer></Footer>
     </div>
  );
}

export default App;
