import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {AnyAction} from "@reduxjs/toolkit";
import {vinDecoderActions} from "../vinDecoder.slice";

export const setLastQueriesToLsThunk = (queryItem: string) => (dispatch: any, getState: () => any): ThunkAction<void, RootState, null, AnyAction> => {
    const {setSearchedQueries} = vinDecoderActions
    const [...items] = getState().vinDecoder.history
    const arr = items
    if (!arr.includes(queryItem)){
        arr.push(queryItem)
    }
    if (arr.length>5){
        arr.shift()
    }
    return dispatch(setSearchedQueries(arr))
}