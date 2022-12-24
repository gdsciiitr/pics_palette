export default (posts=[],action)=>{
    switch(action.type){
        case 'CREATE_POST':
            return [...posts,action.payload];
        default:
            return posts
        }
};