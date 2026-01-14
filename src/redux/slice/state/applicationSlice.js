import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    addApplication(state, action) {
      state.applications.push(action.payload);
    },
    editApplication(state, action) {
      const curr = state.applications.find((application) => {
        return application.jobId === action.payload.jobId;
      });
      Object.assign(curr, action.payload);
    },
    deleteApplication(state, action) {
      let temp = state.applications.filter((application) => {
        return application.jobId !== action.payload;
      });
      state.applications = temp;
    },
  },
});

export const { addApplication, editApplication, deleteApplication } =
  applicationSlice.actions;
export default applicationSlice.reducer;
