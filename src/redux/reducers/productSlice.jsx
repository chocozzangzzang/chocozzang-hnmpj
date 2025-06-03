import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList : [],
    productDetail : null,
    isLoading : false,
    error : null,
}

export const getProducts = createAsyncThunk('product/fetchAll', 
    async (searchQuery, thunkAPI) => {
        try {
            let url = ` https://my-json-server.typicode.com/chocozzangzzang/chocozzang-hnmpj/products?q=${searchQuery}`;
            let response = await fetch(url);
            return await response.json();
        } catch(e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const getProductDetail = createAsyncThunk(`product/fetchDetail`,
    async (id, thunkAPI) => {
        try {
            let url = `https://my-json-server.typicode.com/chocozzangzzang/chocozzang-hnmpj/products/${id}`;
            let response = await fetch(url);
            return await response.json();
        } catch(e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
)

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        // getAllProducts(state, action) {
        //     state.productList = action.payload.data;
        // },
        getProductDetail(state, action) {
            state.productDetail = action.payload.data;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.productList = action.payload;
            state.productDetail = null;
            state.isLoading = false;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(getProductDetail.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetail = action.payload;
            state.isLoading = false;
        })
        .addCase(getProductDetail.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})
export default productSlice.reducer;
export const productActions = productSlice.actions;

// console.log("ppp : ", productSlice);

/*
export default function productReducer(state=initialState, action) {
    let {type, payload} = action;
    console.log(payload);
    switch(type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList : payload};
        case "GET_PRODUCT_DETAIL":
            return {...state, 
                productDetail : payload};
        default:
            return {...state};
    }
}
*/