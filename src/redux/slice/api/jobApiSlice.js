import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jobicy.com/api/v2/" }),
  endpoints: (builder) => ({
    getJobData: builder.query({
      query: () => ({
        url: "remote-jobs",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetJobDataQuery } = jobApi;
