import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { skills: [], projects: [] },
  reducers: {
    setSkillsFilter(state, action) {
      return { ...state, skills: [ ...action.payload ]};
    },
    resetSkillsFilter(state) {
      return {...state, skills: []};
    },
    setProjectsFilter(state, action) {
      return { ...state, projects: [ ...action.payload ] };
    },
    resetProjectsFilter(state) {
      return { ...state, projects: [] };
    },
  },
});

export const { setSkillsFilter, resetSkillsFilter, setProjectsFilter, resetProjectsFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
