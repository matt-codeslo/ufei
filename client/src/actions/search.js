import api from "../apis/selectree_api";


export const searchByName = (searchString) => async (dispatch) => {
    // this action creator returns an async function, which is possible because of the thunk middleware applied in our base index.js.
    // we pass a good ol' plain JS object to dispatch, which is what eventually gets passed to the reducers once the middleware has run
    if (searchString) {
        const response = await api.get(`/search-by-name?searchString=${searchString}`);
        return dispatch({ type: "SEARCH_BY_NAME", payload: response });
    } else {
        return dispatch({ type: "SEARCH_BY_NAME", payload: [] })
    }

};

export const setSelectedTree = (treeName) => {
    return { type: "SET_SELECTED_TREE", payload: treeName };
};
