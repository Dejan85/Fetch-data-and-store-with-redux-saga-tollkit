import { createSlice, createAction } from "@reduxjs/toolkit";


const initialState = {
    user: ""
};

const fetchDataSlice = createSlice({
    name: "fetch-data",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload;
        }
    }
});

const user_login = createAction('USER_LOGIN');

export const { userLogin } = fetchDataSlice.actions;
export { user_login };

export default fetchDataSlice.reducer;