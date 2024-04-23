import { FetchUserResponse, FetchUsersResponse, IUser } from "../../types/type";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<FetchUsersResponse, string>({
      query: () => "/users",
      providesTags: (result) => {
        if (result?.data) {
          return [
            "User",
            ...result.data.map(({ _id }) => ({ type: "User" as const, _id })),
          ];
        }
        return [{ type: "User" as const }];
      },
    }),
    getSingleUser: builder.query<FetchUserResponse, string>({
      query: (id) => `/users/${id}`,
    }),
    deleteUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (newUser) => ({
        url: "/users/admin/create",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, newUser }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
} = userApi;
