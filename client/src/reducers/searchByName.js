//import { bindActionCreators } from "redux";

export default (state = [], action) => {
    switch (action.type) {
        case "SEARCH_BY_NAME":
            return action.payload;
        default:
            return state;
    }
};