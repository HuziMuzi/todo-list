import {LoginDataType} from "../features/Login/Login";
import {Dispatch} from "redux";
import {loginAPI, ResultCode} from "../api/todolists-api";
import {handleNServerNetWorkError, handleServerAppError} from "../utils/error-utils";
import {AxiosError} from "axios";
import {setIsLoggedInAC, setIsLoggedInACType} from "../features/Login/auth-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as null | string,
    isInitialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.value}
        case "APP/SET-INITIALIZED" :
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export const setAppStatus = (status: RequestStatusType) => {
    return {
        type: 'APP/SET-STATUS',
        status
    } as const
}

export const setAppError = (value: string | null) => {
    return {
        type: 'APP/SET-ERROR',
        value
    } as const
}
export const setIsInitialized = (isInitialized: boolean) => {
    return {
        type: 'APP/SET-INITIALIZED',
        isInitialized
    } as const
}


export const authMeTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    loginAPI.authMe()
        .then((res) => {
            if (res.data.resultCode === ResultCode.OK) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppStatus('succeeded'))
            } else {
                handleServerAppError(dispatch, res.data)
            }
        })
        .catch((e: AxiosError) => {
            handleNServerNetWorkError(dispatch, e)
        })
        .finally(()=> {
            dispatch(setIsInitialized(true))
        })
}


export type setAppStatusType = ReturnType<typeof setAppStatus>
export type setAppErrorType = ReturnType<typeof setAppError>
export type setIsInitialized = ReturnType<typeof setIsInitialized>

type ActionsType = setAppStatusType | setAppErrorType | setIsLoggedInACType | setIsInitialized
