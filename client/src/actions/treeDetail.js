import api from "../apis/selectree_api";

export const getTreeDetail = (treeName) => async (dispatch) => {
    try {
        if (treeName) {
            const response = await api.get(`/tree-detail/${treeName}`);
            return dispatch({ type: "GET_TREE_DETAIL", payload: response });
        } else {
            throw new Error('no id provided');
        }
    } catch (err) {
        console.log(`Error in client.actions.treeDetail: ${err}`);
        return dispatch({ type: "GET_TREE_DETAIL", payload: [] });
    }
}