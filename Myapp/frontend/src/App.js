
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Student from "./Student";
import CreateStudent from "./CreateStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />}></Route>
          <Route path='/create' element={<CreateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
