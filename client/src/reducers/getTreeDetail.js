export default (state = [], action) => {
    switch (action.type) {
        case "GET_TREE_DETAIL":
            return action.payload;
        default:
            return state;
    }
};