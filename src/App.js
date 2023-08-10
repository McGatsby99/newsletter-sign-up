
// app styles
import { useState } from 'react';
import './App.css';

// components
import Illustrations from './components/Illustrations';
import Subscribe from './components/Subscribe';
import Success from './components/Success';

function App() {

  const [submitted, setSubmitted] = useState(false);

  const [email, setEmail] = useState('');

  const handleChangeEmail = (event) =>{
    setEmail(event.target.value);
  }

  return (
    <div className="App">
      {
        submitted
        ? <Success setSubmitted={setSubmitted} setEmail={setEmail} email={email}/>
        :(<div className="container">
          <div className="content">
            <Subscribe setSubmitted={setSubmitted} handleChangeEmail={handleChangeEmail} email={email}/>
            <Illustrations />
          </div>
        </div>)
      }  
    </div>
  );
}

export default App;
