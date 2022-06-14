import './style/App.css';
import NavBar from './components/NavBar'
import Card from './components/Card'
import Data from './Data'

function App() {
  const DataItems = Data.map(item =>{
    return <Card 
              key={item.id}
              item={item}
            />
  })
  return (
    <div className="App">
      <NavBar />
      <div className='card-list'>{DataItems}</div>
    </div>
  );
}

export default App;
