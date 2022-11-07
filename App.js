import logo from './logo.svg';
import './App.css';

function App() {
  const cars = ["Saab", "Volvo", "BMW"];

  return (
    <div data-testid="comp" className="App"> 
      <h1 data-testid="testheading" >Hello World!</h1>
       {cars.map((car) => {
        return <p1>{car}</p1>
      })}
    </div>
  );
}

export default App;
