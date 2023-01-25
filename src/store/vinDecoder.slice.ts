import {createSlice} from "@reduxjs/toolkit";
import {IValueResults, IVariableResult, IReducedItems} from "../models/model";

export type IInitialState = {
    valueItems: Array<IValueResults> | [],
    variableList: Array<IVariableResult> | []
    reducedItems: Array<IReducedItems>
    validItems: Array<IValueResults>
    modalState: boolean
    history: Array<string> | []
}

const initialState: IInitialState = {
    valueItems: [],
    variableList: [],
    reducedItems: [],
    validItems: [],
    modalState: false,
    history: JSON.parse(localStorage.getItem('Queries') || '[]') ?? []

}
export const vinDecoderSlice = createSlice({
    name: 'vinDecoderSlice',
    initialState,
    reducers: {
        setSearchedQueries: (state, action) => {
            state.history = action.payload
            localStorage.setItem('Queries', JSON.stringify(action.payload))
        },
        setModalState: (state, action) => {
            state.modalState = action.payload
        },
        setValueItems: (state, action) => {
            state.valueItems = action.payload.Results;
            state.validItems = action.payload.Results.filter((item: IValueResults) => (item.Value !== null && item.Value.length >= 6) && item.ValueId && item.VariableId);

        },
        setVariableDataList: (state, action) => {
            state.variableList = action.payload
        },
        setReducedItems: (state, action) => {
            state.reducedItems = action.payload;
        }
    }
})
export const vinDecoderActions = vinDecoderSlice.actions
export const vinDecoderReducers = vinDecoderSlice.reducer