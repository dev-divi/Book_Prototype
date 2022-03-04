import React, {useState} from 'react';
//import logo from './logo.svg'; 
import './styles/App.css'; // react's auto css 
import b1 from './book-images/1.png'; 
import b2 from './book-images/2.png'; 
import Page2 from './magic/page2' 


function Magic( ){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
   <React.Fragment>
    {showDetail && <p>
      <Page2 /> 
    </p>}
    <span onClick={handleToggle} className={App.thepointer}>Load Page 2</span>

  </React.Fragment> 
  )
} 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Header
        </p>
      </header>
      <div id="wholebook"> 
        <div id="leftbook">
          <p> Left 
          <img src={b1} className="App-logo" alt="logo" />
          </p>
           
        </div> 
        <div id="rightbook">
        Right
        <img src={b2} className="App-logo" alt="logo" />
        </div> 
        <Magic />
      </div>
      
    </div>
  );
}

export default App;
