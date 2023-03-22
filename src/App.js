import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import GetAll from './views/GetAll';
import Create from './views/Create';
import Edit from './views/Edit';

function App() {
  return (
    <div className="container mt-5">
      <h1>Favorite Authors</h1>
      <Routes>
      <Route path="/" element={<GetAll />}></Route>
      <Route path="/author/create" element={<Create />}></Route>
      <Route path="/authors/:_id/update" element={<Edit />}></Route>

      </Routes>
    </div>
  );
}

export default App;
