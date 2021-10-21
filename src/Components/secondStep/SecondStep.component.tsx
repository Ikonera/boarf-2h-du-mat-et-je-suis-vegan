import React, { FunctionComponent, useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import meat from "../../assets/Viande.png"
import tofu from "../../assets/Tofu.png"
import { KebabContext } from "../../store/context"
import { setMeat } from "../../store/reducer"

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
	}
})

const SecondStep: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()
	const { dispatch } = useContext(KebabContext)

	const meatSelection = (meat: string) => {
		dispatch(setMeat(meat))
	}

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					Plutôt viande ou tofu ?
				</Typography>
			</Grid>
			<Grid>
                <img src={meat} alt="Viande" onClick={event => meatSelection("meat")} />
				<img src={tofu} alt="Tofu" onClick={event => meatSelection("tofu")} />
			</Grid>
			<Grid>
				<Button onClick={event => history.push("/step3")}>Suivant</Button>
				<Button onClick={event => history.push("/")}>Précédent</Button>
			</Grid>
		</section>
	)
}

export default SecondStep
