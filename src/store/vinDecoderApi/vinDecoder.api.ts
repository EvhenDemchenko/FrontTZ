import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IValueResults, IRootVariableObject, IServerResponse, IVariableResponseResult} from "../../models/model";

export const vinDecoderApi = createApi({
    reducerPath: 'vinDecoderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://vpic.nhtsa.dot.gov/api/'
    }),
    endpoints: (build) => ({
        getVehicleByVin: build.query<IServerResponse<IValueResults>, string>({
            query: (vin: string) => ({
                url: `vehicles/decodevin/${vin}?format=json`
            }),
        }),
        getVehicleVariableList: build.query<IVariableResponseResult, string>({
            query: (_: string) => ({
                url: `vehicles/getvehiclevariablelist?format=json`
            }),
            transformResponse: (data:IRootVariableObject)=> {return ({Results: data.Results, Message: data.Message})},
        }),
    })
})

export const {useLazyGetVehicleByVinQuery , useGetVehicleVariableListQuery} = vinDecoderApi;
