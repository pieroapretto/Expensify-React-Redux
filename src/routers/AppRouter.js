import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DashboardPage from '../components/DashboardComponents/DashboardPage';
import AddExpensePage from '../components/AddExpenseComponents/AddExpensePage';
import EditExpensePage from '../components/EditExpenseComponents/EditExpensePage';
import HelpPage from '../components/HelpPageComponents/HelpPage';
import NotFoundPage from '../components/NotFoundPageComponents/NotFoundPage';
import Header from '../components/HeaderComponents/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;