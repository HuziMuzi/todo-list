import { Dispatch } from 'redux'
import {setAppErrorType, setAppStatus, setAppStatusType, setIsInitialized} from "../../app/app-reducer";
import {LoginDataType} from "./Login";
import {loginAPI, ResultCode} from "../../api/todolists-api";
import {handleNServerNetWorkError, handleServerAppError} from "../../utils/error-utils";
import {AxiosError} from "axios";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: LoginDataType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    loginAPI.login(data)
        .then((res) => {
                if(res.data.resultCode === ResultCode.OK) {
                    dispatch(setIsLoggedInAC(true))
                    dispatch(setAppStatus('succeeded'))
                } else {
                        handleServerAppError(dispatch, res.data)
                }
        })
        .catch((e : AxiosError) => {
            handleNServerNetWorkError(dispatch,e)
        })
}

export const logOutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    loginAPI.logOut()
        .then((res) => {
            if(res.data.resultCode === ResultCode.OK) {
                dispatch(setIsLoggedInAC(false))
                dispatch(setAppStatus('succeeded'))
            } else {
                handleServerAppError(dispatch, res.data)
            }
        })
        .catch((e : AxiosError) => {
            handleNServerNetWorkError(dispatch,e)
        })

}

// types

export type setIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>
type ActionsType = setIsLoggedInACType  | setAppStatusType | setAppErrorType | setIsInitialized
