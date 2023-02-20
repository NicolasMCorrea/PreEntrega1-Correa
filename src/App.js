import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/Navbar/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Lista de Items"}/>
    </div>
  );
}

export default App;
