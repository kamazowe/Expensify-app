import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action = removeExpense({id:`123acd`});
    expect(action).toEqual({
        type:`REMOVE_EXPENSE`,
        id:`123acd`
    });
})

test(`should setup edit expense action object`,()=>{
   const updates = {description: `nowa opis`,amount:111};
    const id = `1231`
    const action = editExpense(id,updates);
    expect(action).toEqual({
        type:`EDIT_EXPENSE`,
        id:`1231`,
        updates:{
            description: `nowa opis`,
            amount:111
        }
    });
});

test(`setup add expense action object`,()=>{
   const expenseData={
       description:`rent`,
       amount:1000,
       createdAt:1100,
       note:`notes`
   };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:`ADD_EXPENSE`,
        expense:{
            ...expenseData
            
        }
    });
});
test(`setup add expense without data action object`,()=>{

const action = addExpense();
    
    expect(action).toEqual({
        type:`ADD_EXPENSE`,
        expense:{
        description : '',
    note : '',
    amount : 0,
    createdAt : 0
        }
    });
});