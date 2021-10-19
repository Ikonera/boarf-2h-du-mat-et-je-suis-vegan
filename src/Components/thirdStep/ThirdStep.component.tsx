import React, { FunctionComponent, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import tomato from "../../assets/Tomate.png"
import onion from "../../assets/Oignon.png"
import salad from "../../assets/Salade.png"

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

const ThirdStep: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()

	const setTrim = (trim: string) => {
		localStorage.setItem("trim", trim)
		if (localStorage.getItem("trim")) history.push("/step4")
	}

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					Salade, tomates, oignons ?
				</Typography>
			</Grid>
			<Grid>
				<img src={tomato} alt="Tomate" />
				<img src={salad} alt="Salade" />
				<img src={onion} alt="Oignons" />
			</Grid>
		</section>
	)
}

export default ThirdStep
