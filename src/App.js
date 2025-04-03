import logo from './images/logo.png';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import data from './data/data.json';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <Hero></Hero>
      <Catalog data={data}></Catalog>
    </div>
  );
}

export default App;
