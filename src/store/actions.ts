export enum ActionType {
    SetContainer,
    SetMeat,
    SetTrim,
    RemoveTrim,
    SetSauce,
    RemoveSauce,
    ResetKebab,
}

export interface SetContainer {
    type: ActionType.SetContainer
    value: string
}

export interface SetMeat {
    type: ActionType.SetMeat
    value: string
}

export interface SetTrim {
    type: ActionType.SetTrim
    value: string[]
}

export interface SetSauce {
    type: ActionType.SetSauce
    value: string[]
}

export interface ResetKebab {
    type: ActionType.ResetKebab
}

export type KebabActions = SetContainer | SetMeat | SetTrim | SetSauce | ResetKebab

export enum OrderActionType {
    OrderIncrement,
}

export interface OrderIncrement {
    type: OrderActionType.OrderIncrement
}

export type OrderActions = OrderIncrement