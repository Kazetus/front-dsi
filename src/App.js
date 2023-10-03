import Content from "./component/accueil/Content";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyCars from './component/catalogue/MyCars';
import Wrapper from './component/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />}/>
            <Route path="catalogue" element={<MyCars titre="catalogue"/>}/>
            <Route path="*" element={<Content />}/>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}

export default App;