import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { skills: [], projects: [] },
  reducers: {
    setSkillsFilter(state, action) {
      return { ...state, skills: action.payload };
    },
    setProjectsFilter(state, action) {
      return { ...state, projects: action.payload };
    },
  },
});

export const resetSkillsFilter = () => {
  filtersSlice.setSkillsFilter([]);
};

export const resetProjectsFilter = () => {
  filtersSlice.setProjectsFilter([]);
};

export const { setSkillsFilter, setProjectsFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
