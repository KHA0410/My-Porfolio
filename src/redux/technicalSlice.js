import { createSlice } from '@reduxjs/toolkit'
import {tech_arr} from '../../src/Data/technical'
const initialState = {
    tech_arr: tech_arr
}

const technical = createSlice({
  name: "technical",
  initialState,
  reducers: {
    setTech: (state, action) => {
      state.tech_arr = action.payload
    }
  }
});

export const {setTech} = technical.actions

export default technical.reducer