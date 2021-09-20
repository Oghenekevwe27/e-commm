import './App.css';
import { BrowserRouter as Router, route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Ecomm from './components/Ecomm';
import Navbar from './components/Navbar';
import ReviewPage from './pages/ReviewPage';
import Cart from "./pages/Cart";
import Header from './components/Header';
import Contact from './components/Contact';
import Contacta from './components/Contacta';



const App = () => {
  return (
    <div className="Container">
      <Router>
        <Header />
        <Navbar />

        <Switch>
          <route exact path="/">
            <Ecomm />
          </route>
          <route path="/login">
            <Login />
          </route>
          <route path="/signup">
            <Signup />
          </route>

          <route path="/reviewpage">
            <ReviewPage />
          </route>
          <route path="/items">
            <Cart />
          </route>

          <route path="/contact">
            <Contacta />
          </route>
          <route path="/contacta">
            <Contact />
          </route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
