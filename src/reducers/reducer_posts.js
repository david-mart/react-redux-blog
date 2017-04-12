import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const initState = {
    all: [],
    post: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data }
        case FETCH_POSTS: 
            return { ...state, all: action.payload.data }
        default:
            return state
    }
}

export default reducer;
