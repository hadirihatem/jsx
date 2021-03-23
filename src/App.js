import './App.css';
import './Style.css' ; 
import theniya from './f2.jpg'


function App() {
  return (
      <div className="App">
      <header className="App-header">
      <div>

<h1 className="pir">hello the world</h1>



<img  className="pic1" src={theniya} alt='f2.jpg'/>



<img className="pic1" src="/f1.jpg" alt="f1"/> 

</div>

<video width="320" height="240" controls />

<source src="myVideo.mp4" type="video/mp4" /> 


      </header>
    </div>
  
  );
}

export default App;
