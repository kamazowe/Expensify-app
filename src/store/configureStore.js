import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

// zapis umozliwiajacy wlaczenie redux devtools bezkolizji z middleware
const composeEnhancers =window.__REDUX_DEVTOOLS_COMPOSE__ ||
      compose;

// Store Creation
export default ()=>{
    const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    }),
        applyMiddleware(thunk)
        //        window.__REDUX_DEVTOOLS_EXTENSION__ && 
        // window.__REDUX_DEVTOOLS_EXTENSION__()
);
return store;
};

 