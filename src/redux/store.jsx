// import { applyMiddleware, createStore } from "redux";
// import productReducer from "./reducers/productReducer";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers/index.jsx"
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice.jsx";
import productReducer from "./reducers/productSlice.jsx";
/*
let store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)));
export default store;
// combineReducer -> 자동
// thunk -> 자동
// applyMiddleware -> 자동
// composeWithDevTools -> 자동
*/

const store = configureStore({
    reducer : {
        auth : authReducer,
        product : productReducer,
    }
});
export default store;