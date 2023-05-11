import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header'
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
      <Header/>
      <NavBar/>
     <ItemListContainer greeting={'Bienvenidos'}/>
      
    </div>
  );
}

export default App;
