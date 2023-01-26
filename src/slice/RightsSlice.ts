import { createSlice } from "@reduxjs/toolkit";
import internal from "stream";

interface RightState {
    id: number;
    title: string;
    key: string;
    pagepermission: string;
    grade: number;
}

const initialState: RightState[] = [];

export const rightsSlice = createSlice({
    name: 'rights',
    initialState,
    reducers: {
    }
})

export const { } = rightsSlice.actions;

export default rightsSlice.reducer;