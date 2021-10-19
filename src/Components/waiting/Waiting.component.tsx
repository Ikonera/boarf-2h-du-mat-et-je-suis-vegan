import React, { FunctionComponent, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import grec from "../../assets/grec.gif"

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

const Waiting: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()

	const setTrim = (trim: string) => {
		localStorage.setItem("trim", trim)
		if (localStorage.getItem("trim")) history.push("/step3")
	}

    // useEffect(() => {
    //     setTimeout(() => {
    //         history.push('/')
    //     }, 5000);
    // })

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					C'est parti !
				</Typography>
			</Grid>
			<Grid>
				<Typography>Notre maitre kébabier prépare votre commande.</Typography>
				<img src={grec} alt="gne" />
                <Typography>Patience...</Typography>
			</Grid>
		</section>
	)
}

export default Waiting
