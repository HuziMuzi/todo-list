import {setAppError, setAppErrorType, setAppStatus, setAppStatusType} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from '../api/todolists-api'



export const handleNServerNetWorkError = (dispatch: Dispatch<errorDispatchType>, error: { message: string }) => {
    dispatch(setAppError(error.message))
    dispatch(setAppStatus('idle'))
}


export const handleServerAppError = <T>( dispatch : Dispatch<errorDispatchType>,data: ResponseType<T>) => {
    if (data.messages.length) {
        dispatch(setAppError(data.messages[0]))
    } else {
        dispatch(setAppError('Some error. Try late'))
    }
    dispatch(setAppStatus('failed'))
}

type errorDispatchType = setAppErrorType | setAppStatusType