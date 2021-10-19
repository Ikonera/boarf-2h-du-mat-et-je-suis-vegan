import React, { FunctionComponent, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography, FormControlLabel, Checkbox, FormGroup } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import blanche from "../../assets/Blanche.png"
import harissa from "../../assets/Harissa.png"
import curry from "../../assets/Curry.png"
import andalouse from "../../assets/Andalouse.png"
import bbq from "../../assets/BBQ.png"
import ketchup from "../../assets/Ketchup.png"


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

const FourthStep: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()

	const setSauce = (sauce: Array<string>) => {
		// localStorage.setItem("sauce", sauce)
		// if (localStorage.getItem("sauce")) history.push("/step4")
	}

	const imgClick = (event: any) => {
		alert("C'est vrai que je pete")
	}

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					Quel sauce voulez vous?
				</Typography>
			</Grid>
			<Grid>
				{
					[blanche, harissa, andalouse, ketchup, curry, bbq].map((sauce: any, idx: number) => (
						<img src={sauce} alt={`sauce-${idx}`} onClick={event => imgClick(event)} />
					))
				}
			</Grid>
		</section>
	)
}

export default FourthStep
