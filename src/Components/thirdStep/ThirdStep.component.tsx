import React, { FunctionComponent, useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography, Button, FormControl, Checkbox, FormControlLabel } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import tomato from "../../assets/Tomate.png"
import onion from "../../assets/Oignon.png"
import salad from "../../assets/Salade.png"
import { KebabContext } from "../../store/context"
import { setTrim } from "../../store/reducer"


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

const ThirdStep: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()
	const { state, dispatch } = useContext(KebabContext)

	let selectedTrims: string[] = state.trim.slice()

	const trimSelection = (trim: string) => {
		if (selectedTrims.includes(trim)) {
			selectedTrims.splice(selectedTrims.indexOf(trim), 1)
		} else {
			selectedTrims.push(trim)
		}
		dispatch(setTrim(selectedTrims))
	}

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					Salade, tomates, oignons ?
				</Typography>
			</Grid>
			<Grid>
				<FormControlLabel
					control={<Checkbox name="tomato" onChange={event => trimSelection("tomato")} />}
					label={<img src={tomato} alt="Tomate" />}/>
				<FormControlLabel
					control={<Checkbox name="salad" onChange={event => trimSelection("salad")} />}
					label={<img src={salad} alt="Salade" />}/>
				<FormControlLabel
					control={<Checkbox name="onion" onChange={event => trimSelection("onion")} />}
					label={<img src={onion} alt="Oignons" />}/>
			</Grid>
			<Grid>
				<Button onClick={event => history.push("/step4")}>Suivant</Button>
				<Button onClick={event => history.push("/step2")}>Précédent</Button>
			</Grid>
		</section>
	)
}

export default ThirdStep
