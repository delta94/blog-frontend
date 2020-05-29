import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

function App() {
    return (
        <Router>
            <Header />
            <Route path="/post/:id" component={Blog} />
            <Route path="/home" component={Home} />
        </Router>
    );
}

export default App;
