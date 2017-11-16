

store.subscribe(()=>{
    
const state = store.getState();
const visibleExpenses= getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent',amount: 100,createdAt:-1000} ));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:15}));
//
//store.dispatch(removeExpense({id:expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
////store.dispatch(editFilter(text,))
//store.dispatch(setTextFilter('rent'));
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(925));

const demoState = {
    expenses: [{
        id: 'asdadasd',
        description: 'Janueary Rent',
        note:'this was the final payment',
        amount:54200,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate:undefined
    }
};

