import { KebabActions, ActionType, SetContainer, SetMeat, SetTrim, SetSauce, OrderActions, OrderActionType, OrderIncrement, ResetKebab } from "./actions";
import { IKebab, initialKebabState, IOrder } from "./state";

export const kebabReducer = (state: IKebab, action: KebabActions) => {
    switch (action.type) {
        case ActionType.SetContainer:
            return {
                ...state,
                container: action.value
            }
        case ActionType.SetMeat:
            return {
                ...state,
                meat: action.value
            }
        case ActionType.SetTrim:
            return {
                ...state,
                trim: action.value
            }
        case ActionType.SetSauce:
            return {
                ...state,
                sauce: action.value
            }
        case ActionType.ResetKebab:
            return {
                ...initialKebabState
            }

        default:
            return state
    }
}

export const setContainer = (container: string): SetContainer => ({
    type: ActionType.SetContainer,
    value: container
})

export const setMeat = (meat: string): SetMeat => ({
    type: ActionType.SetMeat,
    value: meat
})

export const setTrim = (trims: string[]): SetTrim => ({
    type: ActionType.SetTrim,
    value: trims
})

export const setSauce = (sauces: string[]): SetSauce => ({
    type: ActionType.SetSauce,
    value: sauces
})

export const resetKebab = (): ResetKebab => ({
    type: ActionType.ResetKebab
})


export const OrderReducer = (state: IOrder, action: OrderActions) => {
    switch (action.type) {
        case OrderActionType.OrderIncrement:
            return {
                ...state,
                number: state.number + 1
            }
    
        default:
            return {...state}
    }
}

export const incrementOrder = (): OrderIncrement => ({
    type: OrderActionType.OrderIncrement
})