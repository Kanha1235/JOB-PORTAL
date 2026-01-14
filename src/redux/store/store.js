import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../slice/state/applicationSlice";
import { jobApi } from "../slice/api/jobApiSlice";
export const store = configureStore({
  reducer: {
    application: applicationReducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
});
