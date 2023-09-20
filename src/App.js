import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar title="Webdisk"/>
      {/* <Navbar /> */}
      <div className="container mt-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your Text here</label>
        <textarea className="form-control mt-2" id="exampleFormControlTextarea1"  rows="8"></textarea>
      </div>
      <button className="btn btn-primary mt-3" >Change to UpperCase</button>

    </div>
  );
}

export default App;
