import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://eprofile-api.vercel.app
// http://localhost:5000
// Define a service using a base URL and expected endpoints
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["User", "Company", "Profile"],
  endpoints: () => ({}),
});

export default baseApi;
