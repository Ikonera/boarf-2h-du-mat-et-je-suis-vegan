import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import FourthStep from "../fourthStep/FourthStep.component"
import HomePage from "../homePage/HomePage.component"
import SecondStep from "../secondStep/SecondStep.component"
import ThirdStep from "../thirdStep/ThirdStep.component"
import Waiting from "../waiting/Waiting.component"

const RouterOutlet: FunctionComponent = () =>
{
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/step2' component={SecondStep} />
			<Route exact path='/step3' component={ThirdStep} />
			<Route exact path='/step4' component={FourthStep} />
			<Route exact path='/waiting' component={Waiting} />
		</Switch>
	)
}

export default RouterOutlet
