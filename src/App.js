import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import TodoForm from './components/todos/TodoForm';
import CategoryIndex from './components/todos/CategoryIndex';
import CategoryForm from './components/todos/CategoryForm';
import TaskIndex from './components/todos/TaskIndex';
import './App.css';

function App() {
  return (
    <HashRouter>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route path="/new-task" component={TodoForm} />
          <Route path="/new-category" component={CategoryForm} />
          <Route path="/tasks/:category" component={TaskIndex} />
          <Route path="/categories" component={CategoryIndex} />
          <Route path="/" component={Splash} />
        </Switch>
    </HashRouter>
  );
}

export default App;
