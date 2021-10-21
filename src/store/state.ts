
export interface IKebab {
    container: string
    meat: string
    trim: string[]
    sauce: string[]
}

export const initialKebabState: IKebab = {
    container: '',
    meat: '',
    trim: [],
    sauce: []
}

export interface IOrder {
    number: number
}

export const initialOrderState: IOrder = {
    number: 0
}