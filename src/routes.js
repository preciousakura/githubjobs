import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home.js';
import Jobs from './Pages/Jobs'
import PageJob from './Pages/Jobpage'
import ApiPage from './Pages/ApiPage'
import HowItWorks from './Pages/HowItWorks'



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/githubjobs/" exact component={Home} />
                <Route path="/githubjobs/Api" component={ApiPage} />
                <Route path="/githubjobs/HowItWorks" component={HowItWorks} />
                <Route path="/githubjobs/Jobs/:desc?/:loc?/:check?" component={Jobs} />
                <Route path="/githubjobs/:id" component={PageJob} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;