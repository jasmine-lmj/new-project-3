import './App.css';
import Main from './components/Main';

function App() {
  return (
      
        <div className="content wrapper">
          <header>
            <h1>Too many shows too little time?</h1>
          </header>
          
          <Main />
        {/* <div className="factContainer wrapper">
          <div className="imgContainer">
            <img src={`${poster}`} alt={`Poster of ${showName}`} />
          </div>

          <div className="showDetail">
            <h3>{`${showName}`}</h3>
            <div className="summaryContainer">
              <p>{`Rating: ${rating}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`${funFact}`}</p>
            </div>
          </div>

        </div> */}
        </div>
    
    
  
  );
}

export default App;
