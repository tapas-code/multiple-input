// The App store will be created here
import { configureStore } from "@reduxjs/toolkit";
import { DataSlice } from "./slices/DataSlice";

const store = configureStore({
    reducer: {
        data: DataSlice.reducer,
    },
})

export default store