import './App.css';
import React from 'react';
import Layout from './hoc/Layout';
import {Route, Switch, Redirect} from "react-router-dom";
import Workload from './components/workload';
import Manual from './components/manual';
import Accaunt from './components/accaunt';
import ArticlesList from './hoc/ArticlesList';
import Analitics from './components/analitics';

function App() {
    return (
        <Layout>
            <Switch>
                <Route forceRefresh path="/articles" exact component={ ArticlesList } />
                <Route path="/workload" exact component={ Workload }/>
                {/* <Route path="/account" exact component={ Accaunt }/> */}
                {/* <Route path="/manual" exact component={ Manual }/> */}
                <Route path="/analitics" exact component={ Analitics }/>


                <Redirect from={ "/" } to={ "/articles" } />
            </Switch>
        </Layout>
    );
}

export default App;
