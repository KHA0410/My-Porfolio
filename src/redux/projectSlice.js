import { createSlice } from '@reduxjs/toolkit'
import { project_arr } from '../Data/project';

const initialState = {
    project_arr: project_arr
}

const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    setProject: (state, action) => {
        state.project_arr = action.payload
    }
  }
});

export const {setProject} = projectSlice.actions

export default projectSlice.reducer