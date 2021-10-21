import React, { FunctionComponent, useContext } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import bread from "../../assets/Pain.png"
import pancake from "../../assets/Galette.png"
import { KebabContext, OrderContext } from "../../store/context"
import { setContainer } from "../../store/reducer"
import { initialOrderState } from "../../store/state"
import Checkout from "../Checkout/Checkout.component"

import "./page.scss"


const styles = makeStyles({
	root: {
		padding: "4vh",
		display: "flex",
		flexDirection: "column",
		minHeight: '100%',
		fontFamily: 'Helvetica',
		color: "#3F4841",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: "15vh",
		paddingRight: "5vh",
		paddingLeft: "5vh",
	},
	container: {
		margin: '25vh auto',
		padding: '2% 0',
		width: '50%',
		borderRadius: '15px',
		boxShadow: '0 0 5px 2px grey',
	},
	link: {
		fontSize: '18px',
		marginLeft: '5px',
	},
})

const HomePage: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()
	const { dispatch } = useContext(KebabContext)
	const { orderState } = useContext(OrderContext)

	const setContaining = (container: string) => {
		dispatch(setContainer(container))
	}

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					Pain ou galette ?
				</Typography>
			</Grid>
			<Grid>
				<img src={bread} alt="Pain" onClick={event => setContaining("bread")} />
				<img src={pancake} alt="Galette" onClick={event => setContaining("pancake")} />
			</Grid>
			<Grid>
				<Button onClick={event => history.push("/step2")}>Suivant</Button>
			</Grid>

			{localStorage.getItem("kebab-0") !== null
			? <Grid>
				<Checkout />
			</Grid>
		: ''}
		</section>
	)
}

export default HomePage
