import users from "./slice/users";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    users: users
})