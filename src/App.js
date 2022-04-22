import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllData from "./components/AllData/AllData";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Deposit from "./components/Deposit/Deposit";
import HomeMain from "./components/Home/HomeMain/HomeMain";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import Withdraw from "./components/Withdraw/Withdraw";
import AuthProvider from "./context/AuthProvider";
import "./fonts/fonts.css";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <HomeMain></HomeMain>
          </Route>
          <Route exact path="/home">
            <HomeMain></HomeMain>
          </Route>
          <Route path="/create-account">
            <CreateAccount></CreateAccount>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/deposit">
            <Deposit></Deposit>
          </PrivateRoute>
          <Route path="/withdraw">
            <Withdraw></Withdraw>
          </Route>
          <Route path="/allData">
            <AllData></AllData>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
