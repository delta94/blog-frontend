import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Post from './components/Blog/Post';
import Home from './components/Home/Home';

function App() {
    return (
        <Router>
            <Header />
            <Route path="/home" exact component={Home} />
            <Route path="/post/:id" exact component={Post} />
        </Router>
    );
}

export default App;
