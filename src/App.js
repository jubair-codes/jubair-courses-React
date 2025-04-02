import logo from './images/logo.png';
import './App.css';
import Header from './components/Header/Header';
import data from './data/data.json';

function App() {
  console.log(data);
  
  return (
    <div className="App">
      <Header logo={logo}></Header>
      {
        data.map(course => <h2>{course.name}</h2>)
      }
    </div>
  );
}

export default App;
