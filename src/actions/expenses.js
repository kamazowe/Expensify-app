import uuid from 'uuid';
import database from '../firebase/firebase';

//Add expsense
export const addExpense = (expense)=>({
    
    type:`ADD_EXPENSE`,
    expense    
});

export const startAddExpense =(expenseData = {})=>{

    return (dispatch)=>{
    
    const {
        description = '',
    note = '',
    amount = 0,
    createdAt = 0
    }=expenseData;
    
        const expense = {description,note,createdAt,amount};    
    
        database.ref(`expenses`)
            .push(expense)
            .then((ref)=>{
                   dispatch(addExpense({
                     id:ref.key,
                       ...expense
                   }));
                   });
    };
}; 


//Remove expense
export const removeExpense = ({id})=>({
    type:`REMOVE_EXPENSE`,
        id:id
    
});
//Edit expense\
export const editExpense = (id,updates)=>({
    type:`EDIT_EXPENSE`,
        id,
        updates
    });

