import baseApi from "./baseApi";


const companyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPendingCompany: builder.query({
            query: () => "companies/"
        })
    })
})