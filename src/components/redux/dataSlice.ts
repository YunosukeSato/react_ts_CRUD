import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/Data";

const dataSlice = createSlice({
  name: 'data',
  initialState: data,
  reducers: {
    addData: (state, action) => {
      return [...state, action.payload]
    },
    editData: (state, action) => {
      return state.map(item => {
        if(item.key === action.payload.key) {
          return action.payload
        }
        return item
      })
    },
    deleteData: (state, action) => {
      return state.filter((item, i) => item.key !== action.payload)
    }
  }
})

export const { addData, editData, deleteData } = dataSlice.actions
export default dataSlice.reducer