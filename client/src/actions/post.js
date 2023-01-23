import * as api from '../api';

export const createPost=(formData,navigate)=>async(dispatch)=>{
    try{
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
        };
        const {data}=await api.createPost(formData,config);
        // console.log(data)
        dispatch({type:'CREATE_POST',payload:data});
        navigate('/categories');
    }catch(err){
        console.log('Post creation'+err);
    }
}

export const searchPost=(searchQuery)=>async(dispatch)=>{
    try{
        console.log(searchQuery);
        const {data}=await api.searchPost(searchQuery);
        console.log(data);
        console.log(data.totalpost);
        dispatch({type:'SEARCH_RESULT',payload:data.totalpost});
        // navigate('/categories');
    }catch(err){
        console.log('search creation'+err);
    }
}
