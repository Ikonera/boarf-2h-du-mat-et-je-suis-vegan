import React, { FunctionComponent, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import bread from "../../assets/Pain.png"
import pancake from "../../assets/Galette.png"

//import "./page.scss"


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

const HomePage: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()

	const setContaining = (container: string) => {
		localStorage.setItem("container", container)
		if (localStorage.getItem("container")) history.push("/step2")
	}

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					Pain ou galette ?
				</Typography>
			</Grid>
			<Grid>
				<img src={bread} alt="Pain" />
				<img src={pancake} alt="Galette" />
			</Grid>
		</section>
	)
}

export default HomePage
