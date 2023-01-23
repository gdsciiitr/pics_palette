const initialisation = {
    posts: [],
    searchPosts: []
};
const reducerPost = (state = initialisation, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            return { ...state, posts: action.payload };
        case 'SEARCH_RESULT':
            return { ...state, searchPosts: action.payload };
        default:
            return state;
    }
}

export default reducerPost;