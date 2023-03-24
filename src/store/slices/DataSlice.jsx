// A slice is created to save/remove the data

import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "data",
    initialState: [],
    reducers: {
        addData(state, action) {
            state.push(action.payload)
        },
        removeData(state, action) {
            state.splice(state.indexOf(action.payload), 1)
        },
    }
})

export { DataSlice }
export const { addData, removeData } = DataSlice.actions