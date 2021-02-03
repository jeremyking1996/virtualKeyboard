import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/Navbar/Navbar'
import MainCarousel from './components/Carousel/Carousel'
import ProductButtonGroup from './components/ButtonGroup/ButtonGroup'
import ProductGrid from './components/ProductGrid/ProductGrid'
import ProductCarousel from './components/SecondCarousel/ProductCarousel'

function App() {
  return (
    <div className="App">
        <MainNav />
        <MainCarousel />
        <h1 style={{marginTop: "2.5%", marginBottom: "2.5%"}}>Shop our newest offers and innovations</h1>
        <ProductButtonGroup />
        <ProductGrid />
        <ProductCarousel />
    
    </div>
  );
}

export default App;