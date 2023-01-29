import * as api from '../api';

export const signIn=(user,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signIn(user);
        dispatch({type:'AUTH',data});        
        navigate('/');
    }catch(err){
        console.log('user signin'+err);
    }
}

export const signUp=(formData,navigate)=>async(dispatch)=>{
    try{
        console.log('here in signup');
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        const {data}=await api.signUp(formData,config);
        console.log('data in signup ', data);
        dispatch({type:'AUTH',data});
        navigate('/signin');
    }catch(err){
        console.log('user signup'+err);
    }
}

// export const logout=async(dispatch)=>{
//     try{
//         const data=await api.logout();
//         dispatch({type:'LOGOUT'});
//     }catch(err){
//         console.log('user loggedOUT'+err);
//     }
// }
