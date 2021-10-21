import React, { createContext } from "react";
import { ActionType, KebabActions, OrderActions } from "./actions";
import { IKebab, initialKebabState, initialOrderState, IOrder } from "./state";

export const KebabContext = createContext<{ state: IKebab, dispatch: React.Dispatch<KebabActions> }>({
    state: initialKebabState,
    dispatch: () => undefined
})

export const OrderContext = createContext<{ orderState: IOrder, orderDispatch: React.Dispatch<OrderActions> }>({
    orderState: initialOrderState,
    orderDispatch: () => undefined
})