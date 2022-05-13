import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: "commonApi",
    baseUrl: "https://des3d.com/api/v1",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    timeout: 30000,
    setTimeout: (timeout) => {
      return timeout;
    },
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [ 'measurement'],
  endpoints: (builder) => ({
    sendFacegen: builder.mutation({
      query: (body) => {
        return {
          url: "/send-photo-for-facegen",
          method: "POST",
          body,
        };
      },
      // invalidatesTags: ['measurement'],

    }),
    providesTags: ['Post'],
    sendPhotoForMeasurement: builder.mutation({
      query: (body) => {
        return {
          url: "/send-photo-for-measurement",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ['measurement'],
    }),
    getMeasurement: builder.query({
      query: (data) => {
        const {id,client_id,user_relative_id} = data;
        
        return {
          url: `/get-measurement?user_id=${id}&client_id=${client_id}&user_relative_id=${user_relative_id}`,
          method: "GET",
        };
      },
      providesTags: ['measurement'],
    }),
  }),
});

export const {
  useSendFacegenMutation,
  useSendPhotoForMeasurementMutation,
  useGetMeasurementQuery,
} = api;
