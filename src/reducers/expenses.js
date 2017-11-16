
//Expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState , action)=>{
    switch(action.type){
        case `EDIT_EXPENSE`:
            return state.map((expense)=>{
               if(expense.id === action.id){
                   return{...expense,
                    ...action.updates
                         };
        //drugi spread nadpisze wartosci w //expense
               } else{
                   return expense;
               };
            });
        case `ADD_EXPENSE`:
            return [ 
              ...state,
                action.expense 
            ];
        case `REMOVE_EXPENSE`:
            return state.filter((value)=>(value.id !== action.id));
               
        default:
            return state;
    }
};
