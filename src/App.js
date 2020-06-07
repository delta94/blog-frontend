import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Post from './components/Blog/Post';
import Home from './components/Home/Home';
import ErrorPage from './components/Error/ErrorPage';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={Home} />
                <Route path="/post/:id" exact component={Post} />
                <Route path="/" component={ErrorPage} />
            </Switch>
        </Router>
    );
}

export default App;
