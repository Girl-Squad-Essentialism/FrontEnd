// import './App.less';
import { Route } from 'react-router-dom';
import Home from "./components/home/Home";
import RegisterForm from "./components/register/RegisterForm"
import SignInForm from "./components/signIn/SignInForm"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/register">
        <RegisterForm />
      </Route>
      <Route exact path="/signin">
        <SignInForm />
      </Route>
    </div>
  );
}

export default App;
