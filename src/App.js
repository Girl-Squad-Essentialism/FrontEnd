// import './App.less';
import { Route } from 'react-router-dom';
import Home from "./components/home/home";


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
    </div>
  );
}

export default App;
