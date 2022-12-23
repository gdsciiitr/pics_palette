import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:5000/api'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profiles')){
        req.headers.authorization= `Bearer ${JSON.parse(localStorage.getItem('profiles')).token}`;
    }
    return req;
})

// export const fetchMemory=(page)=>API.get(`/memory?page=${page}`);
// export const fetchMem=(id)=>API.get(`/memory/${id}`);
// export const fetchMemoryBySearch=(searchQuery)=>API.get(`/memory/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
// export const createMemory=(newMemory)=> API.post('/memory',newMemory);
// export const updateMemory=(id,updatedMemory)=> API.patch(`/memory/${id}`,updatedMemory);
// export const deleteMemory=(id)=>API.delete(`/memory/${id}`);
// export const likeMemory=(id)=>API.patch(`/memory/${id}/likes`);
// export const postComment=(comment,id)=>API.patch(`/memory/${id}/comment`,{comment});

export const signUp=(formData,config)=>API.post('/auth/register',formData,config);
export const signIn=(user)=>API.post('/auth/login',user);