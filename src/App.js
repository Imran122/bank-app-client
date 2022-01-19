
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import HomeMain from './components/Home/HomeMain/HomeMain';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Deposit from './components/Deposit/Deposit';
import Withdraw from './components/Withdraw/Withdraw';
import AllData from './components/AllData/AllData';
import LogIn from './components/LogIn/LogIn';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeMain />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/alldata" element={<AllData />} />
          <Route path="/login" element={<LogIn />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
