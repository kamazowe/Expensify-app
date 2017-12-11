import React from 'react';
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../components/LoginPage';

export const history =createHistory();


const AppRouter = () =>(
    <Router history={history}>
         <div>  
        <Switch> {/*Switch po to aby jeden Route wlaczal sie, bez niego NotFoundPage czepia sie do wszystkich Route bo nie ma path czyli pasuje wszedzie */}
            <Route path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />    
            <PrivateRoute path="/create" component={AddExpensePage}/>
            <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}  />
        </Switch>
        </div>
    </Router>
);

export default AppRouter;