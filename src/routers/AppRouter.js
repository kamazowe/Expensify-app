import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';


const AppRouter = () =>(
    <BrowserRouter>
         <div>
             <Header/>
         
        <Switch> {/*Switch po to aby jeden Route wlaczal sie, bez niego NotFoundPage czepia sie do wszystkich Route bo nie ma path czyli pasuje wszedzie */}
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>    
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}  />
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;