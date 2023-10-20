import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/Dashboard";
import AccountCreation from "./component/AccountCreation";
import AccountEntitlement from "./component/AccountEntitlement";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import LevelAppI from "./component/LevelAppI";
import LevelAppII from "./component/LevelAppII";
import LevelAppIII from "./component/LevelAppIII";
import UserAccessList from "./component/UserAccessList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/creation" element={<AccountCreation />}></Route>
            <Route path="/entitlement" element={<AccountEntitlement />}></Route>
            <Route path="/levelOne" element={<LevelAppI />}></Route>
            <Route path="/levelTwo" element={<LevelAppII />}></Route>
            <Route path="/levelThree" element={<LevelAppIII />}></Route>
            <Route path="/userAccessList" element={<UserAccessList />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
