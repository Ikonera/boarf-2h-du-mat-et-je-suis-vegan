import React, { FunctionComponent, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import meat from "../../assets/Viande.png"
import tofu from "../../assets/Tofu.png"

const styles = makeStyles({
	root: {
		minHeight: '100%',
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

	const setMeat = (meat: string) => {
		localStorage.setItem("meat", meat)
		if (localStorage.getItem("meat")) history.push("/step3")
	}

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					Plutôt viande ou tofu ?
				</Typography>
			</Grid>
			<Grid>
                <img src={meat} alt="Viande" />
				<img src={tofu} alt="Tofu" />
			</Grid>
		</section>
	)
}

export default SecondStep
