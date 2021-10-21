import React, { FunctionComponent, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import grec from "../../assets/grec.gif"

const styles = makeStyles({
	root: {
		padding: "2vh",
		display: "flex",
		flexDirection: "column",
		minHeight: '100%',
		fontFamily: 'Helvetica',
		color: "#3F4841",
		alignItems: "center",
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
	tuSerasAligne: {
		display: "flex",
	}
})

const Waiting: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()


	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					C'est parti !
				</Typography>
			</Grid>
			<Grid>
				<Typography className={classes.tuSerasAligne}>Notre maitre kébabier prépare votre commande.</Typography>
				<img src={grec} alt="gne" />
                <Typography>Patience...</Typography>
			</Grid>
		</section>
	)
}

export default Waiting
