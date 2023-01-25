import {vinDecoderActions} from "../store/vinDecoder.slice";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";

const actions = {
    ...vinDecoderActions,
}

export const useAppActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}