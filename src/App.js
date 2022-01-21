
import './App.css';
import './fonts/fonts.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeMain from './components/Home/HomeMain/HomeMain';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Deposit from './components/Deposit/Deposit';
import Withdraw from './components/Withdraw/Withdraw';
import AllData from './components/AllData/AllData';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/home">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/create-account">
            <CreateAccount></CreateAccount>
          </Route>
          <Route path="/deposit">
            <Deposit ></Deposit>
          </Route>
          <Route path="/withdraw">
            <Withdraw ></Withdraw>
          </Route>
          <Route path="/allData">
            <AllData ></AllData>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
