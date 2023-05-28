import React from 'react';
import './App.css';

import Header from './components/Header/Header';

import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import ProjectPage from './pages/project';
import LoginPage from './pages/login';
import FinderMain from './pages/Finder/Finder';
import AdminMain from './pages/Admin/Admin';
import DOM from './pages/DOM/DOM';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <main className='main'>
                    <Switch>
                        <Route path='/project/:id' component={ProjectPage} />
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/find' component={FinderMain}/>
                        <Route exact path='/admin' component={AdminMain}/>
                        <Route exact path='/f' component={DOM}></Route>
                        <Redirect to='/' />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
