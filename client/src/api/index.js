import axios from 'axios';

const API=axios.create({baseURL:'https://pics-palette-api.vercel.app/'});


API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profiles')){
        req.headers.authorization= `Bearer ${JSON.parse(localStorage.getItem('profiles')).token}`;
    }
    return req;
})

// export const fetfetchMemchMemory=(page)=>API.get(`/post/timeline/all`);
// export const =(id)=>API.get(`/memory/${id}`);
// export const fetchMemoryBySearch=(searchQuery)=>API.get(`/memory/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
// export const createMemory=(newMemory)=> API.post('/memory',newMemory);
// export const updateMemory=(id,updatedMemory)=> API.patch(`/memory/${id}`,updatedMemory);
// export const deleteMemory=(id)=>API.delete(`/memory/${id}`);
// export const likeMemory=(id)=>API.patch(`/memory/${id}/likes`);
// export const postComment=(comment,id)=>API.patch(`/memory/${id}/comment`,{comment});

export const signUp=(formData,config)=>API.post('/api/auth/register',formData,config);
export const signIn=(user)=>API.post('/api/auth/login',user);
export const createPost=(formData,config)=>API.post('/api/post',formData,config);
export const searchPost=(searchQuery)=>API.get(`/api/post/search/find?username=${searchQuery}`);
// export const logout=(null);
