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

export const userSign: any = createAction('USER_LOGIN');

export const { userLogin } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;