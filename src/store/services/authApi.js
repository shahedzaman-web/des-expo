import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://des3d.com/api/v1",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body) => {
        const { email, password } = body;
        return {
          url: "/login",
          method: "POST",
          body: {
            email,
            password,
            device_name: "mobile",
          },
        };
      },
    }),
    logoutUser: builder.mutation({
      
      query: (body) => {
        return {
          url: "/logout",
          method: "POST",
          body,
        };
      }
  }),
  }),
})

export const { useSigninUserMutation ,
          useLogoutUserMutation 
} = authApi;
