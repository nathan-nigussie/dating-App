import './App.css';
import DatingApp from './components/DatingApp';
import HomePage from './components/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="application-form" element={<DatingApp />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
