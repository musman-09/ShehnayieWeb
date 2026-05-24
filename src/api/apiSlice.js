import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { dataToQueryParameter } from "./APIHelper";
import { baseUrl } from "./config";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}api/`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    },
  }),

  keepUnusedDataFor: 3,

  endpoints: (builder) => ({
    // get: builder.query({
    //   query: (endpoint) => endpoint,

    get: builder.query({
      query: (arg) => {
        const endpoint = arg?.endpoint || arg;
        const params = arg?.params ? dataToQueryParameter(arg.params) : "";
        return `${endpoint}${params}`;
      },
    }),

    post: builder.mutation({
      query: (arg) => ({
        url: arg.params
          ? `${arg.endpoint}${dataToQueryParameter(arg?.params)}`
          : arg?.endpoint,
        method: "POST",
        body: arg?.data,
        headers: arg?.headers
          ? arg?.headers
          : {
              "Content-Type": "application/json",
            },
      }),
      transformResponse: (response) => response?.data,
    }),
    put: builder.mutation({
      query: (arg) => ({
        // url: arg.endpoint,
        url: arg.params
          ? `${arg.endpoint}${dataToQueryParameter(arg?.params)}`
          : arg?.endpoint,
        method: "PUT",
        body: arg.data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    delete: builder.mutation({
      query: (arg) => ({
        url: arg.params
          ? `${arg.endpoint}${dataToQueryParameter(arg?.params)}`
          : arg.endpoint,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: arg?.data,
      }),
    }),

    patch: builder.mutation({
      query: (arg) => ({
        url: arg.params
          ? `${arg.endpoint}${dataToQueryParameter(arg?.params)}`
          : arg.endpoint,
        method: "PATCH",
        body: arg?.data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    upload: builder.mutation({
      query: (arg) => {
        var bodyFormData = new FormData();
        bodyFormData.append("file", arg.data);
        return {
          url: arg.params
            ? `${arg.endpoint}${dataToQueryParameter(arg?.params)}`
            : arg?.endpoint,
          method: "POST",
          body: bodyFormData,
        };
      },
    }),
  }),
});

export const {
  useGetQuery,
  useLazyGetQuery,
  usePostMutation,
  usePutMutation,
  useDeleteMutation,
  usePatchMutation,
  useUploadMutation,
} = apiSlice;
