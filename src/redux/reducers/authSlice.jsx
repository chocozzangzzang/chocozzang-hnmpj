import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

let initialState = {
    id : "",
    pw : "",
    auth : false,
    isLoading : false,
    error : "",
}

async function fakeLogin(id, pw) {
    return {id, pw};
}

async function fakeLogout() {
    return;
}

export const login = createAsyncThunk(`login`,
    async ({id, pw}, thunkAPI) => {
        try {
            return await fakeLogin(id, pw);
        } catch(e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const logout = createAsyncThunk('logout',
    async (thunkAPI) => {
        try {
            return await fakeLogout();
        } catch(e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
)

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        // login(state, action) {
        //     state.id = action.payload.id;
        //     state.pw = action.payload.pw;
        //     state.auth = true;
        // },
        logout(state) {
            return initialState;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, action) => {
            state.id = action.payload.id;
            state.pw = action.payload.pw;
            state.auth = true;
            state.isLoading = false;
        }).addCase(login.rejected, (state, action) => {
            Object.assign(state, initialState);
            state.error = action.payload;
        }).addCase(logout.pending, (state) => {
            state.isLoading = true;
        }).addCase(logout.fulfilled, (state, action) => {
            return initialState;
        }).addCase(logout.rejected, (state, action) => {
            Object.assign(state, initialState);
            state.error = action.payload;
        })
    }
})
export default authSlice.reducer;
export const authActions = authSlice.actions;

// function authReducer(state=initialState, action) {
//     let {type, payload} = action;
//     switch(type) {
//         case "LOGIN_SUCCESS":
//             return {...state, id : payload.id, pw : payload.pw, auth : true};
//         case "LOGOUT":
//             return {...state, id : "", pw : "", auth : false};
//         default:
//             return {...state};
//     }
// }

// export default authReducer;