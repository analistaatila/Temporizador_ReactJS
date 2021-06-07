
import './App.css';
import LabelCronometro from './components/LabelCronometro';
import Contador from './components/Contador'

function App() {


  return (
    <div className="App"> 
      <LabelCronometro name =  "⏰  Temporizador  ⏰ "/>  
      <Contador/>
    </div>
  );
}

export default App;
