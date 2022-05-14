import './App.css';
import Button from './Components/button';

function App() {
  return (
   <div className="button">
     <Button children={'Text'} disabled={false} icon='check' color='white' primary={true}></Button>
     <Button children={'Text'} disabled={false} icon='arrow-right' color='white' primary={true}></Button>
     <Button children={'Text'} disabled={false} icon='refresh' color='white' primary={true}></Button>
   </div>
  );
}

export default App;