import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "@states/counter/driver";

export const increment = createAsyncThunk(
  "counter/fetchCount",
  async (value: number) => {
    const { data } = await fetchCount(value);
    return data;
  }
);
