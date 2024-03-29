import * as api from '../api';

export const signIn=(user,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signIn(user);
        dispatch({type:'AUTH',data});        
        navigate('/');
        return true;
    }catch(err){
        console.log('user signin'+err);
        return false;
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
        alert('Please fill the form correctly');
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
