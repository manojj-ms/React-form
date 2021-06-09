import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        id: 0,
        email: 0,
        first_name: 0,
        last_name: 0,
        avatar: 0,
        users: []
    },
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
    }
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer