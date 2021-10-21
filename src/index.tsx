import React, { FunctionComponent, useReducer } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline } from "@material-ui/core"
import RouterOutlet from "./Components/routerOutlet/RouterOutlet.component"
import Header from "./Components/header/Header.component"
import Footer from "./Components/footer/Footer.component"
import { KebabContext, OrderContext } from "./store/context"
import { kebabReducer, OrderReducer } from "./store/reducer"
import { initialKebabState, initialOrderState } from "./store/state"

const App: FunctionComponent = () =>
{
	const [orderState, orderDispatch] = useReducer(OrderReducer, initialOrderState)
	const [state, dispatch] = useReducer(kebabReducer, initialKebabState)

    return (
		<OrderContext.Provider value={{ orderState, orderDispatch }}>
			<KebabContext.Provider value={{ state, dispatch }}>
				<CssBaseline />
				<Header />
				<RouterOutlet />
				<Footer />
			</KebabContext.Provider>
		</OrderContext.Provider>
    )
}


ReactDOM.render(
	<Router>
		<App />
	</Router>,
    document.querySelector("#root")
)
