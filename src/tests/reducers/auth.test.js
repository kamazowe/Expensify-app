import authReducer from '../../reducers/auth';




test('should setup authReducer login object',()=>{
    const  action = {
        type:'LOGIN',
        uid:123
    };
    const state = {};
    const wrapper = authReducer(state,action);
    expect(wrapper).toEqual({
        uid:action.uid
    });
});

test('should setup authReducer logout object',()=>{
    const  action = {
        type:'LOGOUT'
    };
    const state = {};
    const wrapper = authReducer(state,action);
    expect(wrapper).toEqual({
    });
});