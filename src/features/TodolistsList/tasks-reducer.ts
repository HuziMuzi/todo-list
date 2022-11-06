import {
    addTodolistAC,
    AddTodolistActionType, clearDataTodosType,
    RemoveTodolistActionType,
    SetTodolistsActionType
} from './todolists-reducer'
import {
    ResultCode, TaskDomainType,
    TaskPriorities,
    TaskStatuses,
    TaskType,
    todolistsAPI,
    UpdateTaskModelType
} from '../../api/todolists-api'
import {Dispatch} from 'redux'
import {AppRootStateType} from '../../app/store'
import {RequestStatusType, setAppErrorType, setAppStatus, setAppStatusType} from "../../app/app-reducer";
import axios, {AxiosError} from "axios";
import {handleNServerNetWorkError, handleServerAppError} from "../../utils/error-utils";
import {ThunkAction} from "redux-thunk";

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case 'ADD-TASK':
            return {
                ...state,
                [action.task.todoListId]: [{...action.task, entityStatus: 'idle'}, ...state[action.task.todoListId]]
            }
        case 'UPDATE-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? {...t, ...action.model} : t)
            }
        case 'ADD-TODOLIST':
            return {...state, [action.todolist.id]: []}
        case 'REMOVE-TODOLIST':
            const copyState = {...state}
            delete copyState[action.id]
            return copyState
        case 'SET-TODOLISTS': {
            const copyState = {...state}

            action.todolists.forEach(tl => {
                copyState[tl.id] = []
            })
            return copyState
        }
        case 'SET-TASKS':
            return {...state, [action.todolistId]: action.tasks.map(t => ({...t, entityStatus: 'idle'}))}
        case "CHANGE-TASK-ANTITY-STATUS":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {
                    ...t,
                    entityStatus: action.status
                } : t)
            }
        case "CLEAR-DATA-TODOS":
            return {}
        default:
            return state
    }
}

// actions
export const removeTaskAC = (taskId: string, todolistId: string) =>
    ({type: 'REMOVE-TASK', taskId, todolistId} as const)
export const addTaskAC = (task: TaskType) =>
    ({type: 'ADD-TASK', task} as const)
export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string) =>
    ({type: 'UPDATE-TASK', model, todolistId, taskId} as const)
export const setTasksAC = (tasks: Array<TaskType>, todolistId: string) =>
    ({type: 'SET-TASKS', tasks, todolistId} as const)
export const changeTaskEntityStatusAC = (taskId: string, todolistId: string, status: RequestStatusType) => {
    return {
        type: 'CHANGE-TASK-ANTITY-STATUS',
        taskId,
        todolistId,
        status
    } as const
}


// thunks
export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    todolistsAPI.getTasks(todolistId)
        .then((res) => {
            setTasksAC(res.data.items, todolistId)
            dispatch(setTasksAC(res.data.items, todolistId))
            dispatch(setAppStatus('succeeded'))
        })
        .catch((e: AxiosError) => {
            handleNServerNetWorkError(dispatch, e)
        })
}
export const removeTaskTC = (taskId: string, todolistId: string) => async (dispatch: Dispatch<ActionsType>) => {
    try {
        dispatch(setAppStatus('loading'))
        dispatch(changeTaskEntityStatusAC(taskId, todolistId, "loading"))
        const res = await todolistsAPI.deleteTask(todolistId, taskId)
        dispatch(removeTaskAC(taskId, todolistId))
        dispatch(setAppStatus('succeeded'))
    } catch (e) {
        const err = e as Error | AxiosError
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? (err.response.data as ({ message: string })) : err
            handleNServerNetWorkError(dispatch, error)
        }
    }

}
export const addTaskTC = (title: string, todolistId: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'))
    todolistsAPI.createTask(todolistId, title)
        .then(res => {
            if (res.data.resultCode === ResultCode.OK) {
                dispatch(addTaskAC(res.data.data.item))
                dispatch(setAppStatus('succeeded'))
            } else {
                handleServerAppError(dispatch, res.data)
            }
        })
        .catch((e: AxiosError) => {
            handleNServerNetWorkError(dispatch, e)
        })
}
export const updateTaskTC = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string) =>
    (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
        dispatch(setAppStatus('loading'))
        dispatch(changeTaskEntityStatusAC(taskId, todolistId, "loading"))
        const state = getState()
        const task = state.tasks[todolistId].find(t => t.id === taskId)
        if (!task) {
            console.warn('task not found in the state')
            return
        }

        const apiModel: UpdateTaskModelType = {
            deadline: task.deadline,
            description: task.description,
            priority: task.priority,
            startDate: task.startDate,
            title: task.title,
            status: task.status,
            ...domainModel
        }

        todolistsAPI.updateTask(todolistId, taskId, apiModel)
            .then(res => {
                const action = updateTaskAC(taskId, domainModel, todolistId)
                dispatch(action)
                dispatch(setAppStatus('succeeded'))
                dispatch(changeTaskEntityStatusAC(taskId, todolistId, "succeeded"))
            })
            .catch((e: AxiosError) => {
                handleNServerNetWorkError(dispatch, e)
            })
    }


// types
export type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}


export type TasksStateType = {
    [key: string]: Array<TaskDomainType>
}


export type fetchTasksTCType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsType>
type ActionsType =
    | ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof updateTaskAC>
    | AddTodolistActionType
    | RemoveTodolistActionType
    | SetTodolistsActionType
    | ReturnType<typeof setTasksAC>
    | setAppStatusType
    | setAppErrorType
    | ReturnType<typeof changeTaskEntityStatusAC>
    | clearDataTodosType
