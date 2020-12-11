
export default (state = [], action) => {
    switch (action.type) {
        case "SET_SELECTED_TREE":
            return action.payload;
        default:
            return state;
    }
};