import {vinDecoderActions} from '../vinDecoder.slice'
import {IReducedItems, IValueResults, IVariableResult} from "../../models/model";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {AnyAction} from "@reduxjs/toolkit";

export const setReducedItems = () => (dispatch: any, getState: () => any): ThunkAction<void, RootState, null, AnyAction> => {
    const {setReducedItems} = vinDecoderActions
    const validItems = getState().vinDecoder.valueItems
    const variableItems = getState().vinDecoder.variableList

    const res = validItems.map((item: IValueResults) => {
        const {ValueId, Value, Variable, VariableId} = item;
        let filtered: IReducedItems = variableItems.reduce((acc: any, data: IVariableResult) => {
            if (data.ID === VariableId) {
                acc.Value = Value
                acc.ValueId = ValueId
                acc.Variable = Variable
                acc.VariableId = VariableId
                acc.ID = data.ID
                acc.DataType = data.DataType
                acc.Name = data.Name
                acc.Description = data.Description
                acc.GroupName = data.GroupName
            }
            return acc
        }, {Value, ValueId, Variable, VariableId})
        return filtered;
    })
    return dispatch(setReducedItems(res))
};