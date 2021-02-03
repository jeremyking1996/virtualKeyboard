import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/Navbar/Navbar'
import MainCarousel from './components/Carousel/Carousel'
import ProductButtonGroup from './components/ButtonGroup/ButtonGroup'
import ProductGrid from './components/ProductGrid/ProductGrid'
import ProductCarousel from './components/SecondCarousel/ProductCarousel'
import TVAudio from './components/TVAudio/TVAudio'
import JDPower from './components/JDAwards/JDAwards'
import Explore from './components/DoWhatYouCant/Explore'
import SearchBar from './components/SearchBar/SearchBar'
import DropDown from './components/DropDown/DropDown'
import Table from './components/Table/Table'


function App() {
  return (
    <div className="App">
        <MainNav />
        <MainCarousel />
        <h1 style={{marginTop: "2.5%", marginBottom: "2.5%"}}>Shop our newest offers and innovations</h1>
        <ProductButtonGroup />
        <ProductGrid />
        <ProductCarousel />
        <TVAudio />
        <JDPower />
        <h1 style={{margin: "5%"}}>Explore #DoWhatYouCant</h1>
        <Explore />
        <SearchBar />
        <DropDown />
        <Table />
    </div>
  );
}

export default App;