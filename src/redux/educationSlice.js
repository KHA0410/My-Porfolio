import { createSlice } from '@reduxjs/toolkit'
import {education_arr} from "../Data/education.js"
const initialState = {
    edu_arr: education_arr
}

const education = createSlice({
  name: "education",
  initialState,
  reducers: {
    setEdu: (state, action) => {
        state.edu_arr = action.payload
    }
  }
});

export const {setEdu} = education.actions

export default education.reducer