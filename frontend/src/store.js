import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
   userLoginReducer,
   userRegisterReducer,
   userDetailsReducer,
   userUpdateReducer,
   userListAdminReducer,
   userDeleteAdminReducer,
   userUpdateAdminReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   userUpdate: userUpdateReducer,
   userListAdmin: userListAdminReducer,
   userDeleteAdmin: userDeleteAdminReducer,
   userUpdateAdmin: userUpdateAdminReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
   ? JSON.parse(localStorage.getItem("userInfo"))
   : null;

const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
