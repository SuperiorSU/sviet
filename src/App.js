import './App.css';
import Cards from './components/Cards';
import Foot from './components/Foot';
import Graph from './components/Graph';
import Grid from './components/Grid';
import HeroSlider from './components/HeroSlider';
import Navbar from './components/Navbar';
import Placement from './components/Placement';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import World from './components/World';

function App() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <HeroSlider/>
        <Stats/>
        <Graph/>
        <World/>
        <Cards/>
        <Placement/>
        <Grid/>
        <Testimonials/>
        <Foot/>
    </div>
  );
}

export default App;
