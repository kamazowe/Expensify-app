import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense} from './actions/expenses';
import { setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import './firebase/firebase';
import './playground/promises';

const store = configureStore();

store.dispatch(addExpense({description:`Water bill`,createdAt:120,amount:4500}));

store.dispatch(addExpense({description:`Rent`,createdAt:122,amount:2000}));

store.dispatch(addExpense({description:`Gas bill`,createdAt:124, amount:1200}));





const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);




const jsx = (
<Provider store={store}>
    <AppRouter/>
</Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
           
                
