const initialisation={user:null};

const reducerAuth=(state=initialisation,action)=>{
    switch (action.type){
        case 'AUTH':
            localStorage.setItem('profiles',JSON.stringify({...action?.data}))
            return {...state,user:action?.data};
        case 'LOGOUT':
            localStorage.clear();
            return {...state,user:null}
        default:
            return state;
    }
}

export default reducerAuth;
