import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {login,logout} from '../../actions/auth';


test('should setup login to action object',()=>{
    let uid =123;
   const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    });
});

test('should setup logout to action object',()=>{
  
   const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
        
    });
});