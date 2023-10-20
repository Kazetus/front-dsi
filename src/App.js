import Content from "./component/accueil/Content";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Wrapper from './component/Wrapper';
import Register from "./component/register/Register";
import Login from "./component/login/Login";
import Account from "./account/Account";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/account" element={<Account />}/>
            <Route path="*" element={<Content />}/>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}

export default App;