import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDragonInform, getAllDragonInform } from "API";

export const fetchMainRocketInfo = createAsyncThunk(
    'fetchMainRocketInfo',
    async () => {
        const response = await getDragonInform();
        return response
    }
);

export const fetchMoreRocketsInfo = createAsyncThunk(
    'fetchMoreRocketsInfo',
    async () => {
        const response = await getAllDragonInform();
        return response
    }
);