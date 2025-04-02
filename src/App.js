import logo from './images/logo.png';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import data from './data/data.json';

function App() {
  console.log(data);
  
  return (
    <div className="App">
      <Header logo={logo}></Header>
      <Hero></Hero>
      {
        data.map(course => <h2>{course.name}</h2>)
      }
    </div>
  );
}

export default App;
