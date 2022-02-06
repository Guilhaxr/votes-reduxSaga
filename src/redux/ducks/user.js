export const GET_USER = 'GET_USER';
 const SET_USER = 'SET_USER';

//actions
export const getUser = ()=> ({
    type : GET_USER
});

export const setUser = (user) => ({
    type: SET_USER,
    user: user
})


//state
const initialState = {
    user: undefined
}


//reducer
const userReducer =  (state = initialState, action) =>{
    switch(action.type){
        case SET_USER:
            const {user} = action;
            return{...state, user: user}
        default:
            return state
    }
}

export default userReducer;