import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import TodoList from './components/TodoList';
import {ListProvider} from './components/Context';
function App() {
  return (
    <div className="App">
      <Router>
        <ListProvider>
          <Header></Header>
          <Route exact path='/' component={TodoList}></Route>
        </ListProvider>
      </Router>
    </div>
  );
}

export default App;
