import {
  AddUserInput,
  FetchUserResponse,
  FetchUsersResponse,
  IUser,
} from "../../types/type";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<FetchUsersResponse, undefined>({
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
      providesTags: (result) => {
        if (result?.data) {
          [{ type: "User", _id: result.data._id }];
        }
        return [{ type: "User" as const }];
      },
    }),
    deleteUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "User" as const, _id: arg },
      ],
    }),
    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (newUser) => ({
        url: "/users/admin/create",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data }: { data: any; meta: any } = await queryFulfilled;

      //     dispatch(
      //       userApi.util.updateQueryData("getUsers", undefined, (draft) => {
      //         console.log("from 56", draft);
      //         toast.success("User created successfully from user api");
      //         draft.data.push(data?.data);
      //       })
      //     );
      //   } catch (error) {
      //     console.error("Error creating user:", error);
      //     // Handle error as needed
      //   }
      // },
    }),
    updateUser: builder.mutation<
      FetchUserResponse,
      { id: string; newUser: AddUserInput }
    >({
      query: ({ id, newUser }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: newUser,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "User" as const, _id: id },
      ],
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
