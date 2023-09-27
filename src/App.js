import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
        setAlert({
        msg: message,
        type: type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#1B2430'
      showAlert(' Dark mode','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#F0F0F0';
      showAlert(' Light mode','success')

    }
  }
  return (
    <>
   <Navbar title='TEXTUTILS' about={'About'} mode={mode} toggleMode={toggleMode} />
   {/* <Navbar/> */}
   <Alert alert={alert}/>

  <div className="container my-3">
   <Textform heading="TEXTBOX" mode={mode}/>
   {/* <Textform heading="TEXTBOX"/> */}
   </div>
   </>
  );
}

export default App;
