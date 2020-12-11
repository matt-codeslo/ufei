import { combineReducers } from "redux";
import searchByName from "./searchByName";
import getTreeDetail from "./getTreeDetail";
import setSelelectedTree from "./setSelectedTree";

export default combineReducers({ suggestions: searchByName, selectedTree: setSelelectedTree, treeDetail: getTreeDetail });
