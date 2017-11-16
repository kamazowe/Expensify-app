import {createStore} from 'redux';

//przekazywane typy akcji przewochuje,rozdaje state dla komponentow
const incrementCount = ({incrementBy = 1} = {} ) =>({
    type:`INCREMENT`,
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) =>({
    type:`DECREMENT`,
    decrementBy: decrementBy
});

const resetCount = () =>({
    type:`RESET`
});

const setCount = ({count})=>({
    type:`SET`,
    numbera: count
});

// Reducers
// 1. Reducers are pure functions - niezaleznie co wejdzie bledu nie wywali tylko dana wartosc
// 2. Nigdy nie zmieniaja stanu albo akcji,
// za to zwracaja obiekt ktorego wartosc moze miec stan
const countReducer = (state ={count:0},action)=>{
    
    
    switch(action.type){
        case `INCREMENT`: 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return{
            count:state.count + incrementBy 
            };
        case `DECREMENT`:
            const decrementBy = typeof action.decrementBy ==='number' ? action.decrementBy : 1;
            return{
              count:state.count-decrementBy  
            };
        case `RESET`:
            return{
                count:0
            };
        case `SET` :
            const set = typeof action.numbera === 'number' ? action.numbera: state.count;
            return{
                count: set
            }
        default:
            return state;
    }  
}


const store = createStore(countReducer);

// wywoluje callback gdy dispatch odpalony
const unsubscribe = store.subscribe(()=>{
   console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(decrementCount({decrementBy:3}));

store.dispatch(resetCount());

store.dispatch(setCount({count:15}));