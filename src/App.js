// import './App.less';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import RegisterForm from "./components/register/RegisterForm"
import SignInForm from "./components/signIn/SignInForm"
import Footer from "./components/footer/Footer"
import ContactUs from "./components/contactUs/ContactUs"

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/register">
        <RegisterForm />
      </Route>
      <Route exact path="/signin">
        <SignInForm />
      </Route>
      <Route exact path="/contactus">
        <ContactUs />
      </Route>
      </Switch>


      <Footer />
    </div>
  );
}

export default App;
