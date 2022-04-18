import './App.css';
import Question from './Components/Question';
import SideBar from './Components/SideBar';
import Hero from './Components/Hero';
import Stores from './Components/Stores';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <Hero></Hero>
      <h2>Choose your store in Milaukee</h2>
      <div id='storesContainer'>
        <Stores id="Stores"></Stores>
      </div>
    </div>
  );
}

export default App;