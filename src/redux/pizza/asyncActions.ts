
// type FetchPizzasArgs = Record<string, string>;//когда всё строчки

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async (params) => {
      const { sortBy, order, category, search, currentPage } = params;
    //   const { data } = await axios.get<Pizza[]>(`https://63a2fd389704d18da08257f0.mockapi.io/items`, {
    //   params: pickBy(
    //     {
    //       page: currentPage,
    //       limit: 4,
    //       category,
    //       sortBy,
    //       order,
    //       search,
    //     },
    //     identity,
    //   ),
    // });
      
      const { data } = await axios.get<Pizza[]>(
        `https://63a2fd389704d18da08257f0.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
      // if (data.length === 0) {
      //   thunkAPI.rejectWithValue("Пиццы пустые");
      // }
      // return thunkAPI.fulfillWithValue(data);
    }
  );