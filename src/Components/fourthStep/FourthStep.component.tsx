import React, { FunctionComponent, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { Link, Grid, Typography, FormControlLabel, Checkbox, FormGroup, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import blanche from "../../assets/Blanche.png"
import harissa from "../../assets/Harissa.png"
import curry from "../../assets/Curry.png"
import andalouse from "../../assets/Andalouse.png"
import bbq from "../../assets/BBQ.png"
import ketchup from "../../assets/Ketchup.png"
import { KebabContext } from "../../store/context"
import { setSauce } from "../../store/reducer"


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

const FourthStep: FunctionComponent = () =>
{
	const classes = styles()
	const history = useHistory()
	const { state, dispatch } = useContext(KebabContext)

	let selectedSauces: string[] = state.sauce.slice()

	const sauceSelection = (event: React.ChangeEvent<HTMLInputElement>, sauce: string) => {
		if(selectedSauces.includes(sauce)) selectedSauces.splice(selectedSauces.indexOf(sauce), 1)
		else selectedSauces.push(sauce)
		dispatch(setSauce(selectedSauces))
	}

	const saucesControl = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (state.sauce.length > 2) {
			alert("Vous ne pouvez pas prendre une troisième sauce, veuillez en désélectionner !")
			event.preventDefault()
		} else history.push("/ordering")
	}

	useEffect(() => {
		console.log(state)
	}, [state.sauce.length])

	return (
		<section className={ classes.root }>
			<Grid>
				<Typography variant="h2">
					Quel sauce voulez vous?
				</Typography>
			</Grid>
			<Grid>
				<FormControlLabel
					control={<Checkbox name="blanche" onChange={event => sauceSelection(event, "blanche")} />}
					label={<img src={blanche} alt="Blanche" />}/>
				<FormControlLabel
					control={<Checkbox name="harissa" onChange={event => sauceSelection(event, "harissa")} />}
					label={<img src={harissa} alt="Harissa" />}/>
				<FormControlLabel
					control={<Checkbox name="bbq" onChange={event => sauceSelection(event, "bbq")} />}
					label={<img src={bbq} alt="Barbecue" />}/>
				<FormControlLabel
					control={<Checkbox name="ketchup" onChange={event => sauceSelection(event, "ketchup")} />}
					label={<img src={ketchup} alt="Ketchup" />}/>
				<FormControlLabel
					control={<Checkbox name="curry" onChange={event => sauceSelection(event, "curry")} />}
					label={<img src={curry} alt="Curry" />}/>
				<FormControlLabel
					control={<Checkbox name="andalouse" onChange={event => sauceSelection(event, "andalouse")} />}
					label={<img src={andalouse} alt="Andalouse" />}/>
			</Grid>
			<Grid>
				<Button onClick={event => saucesControl(event)}>Suivant</Button>
				<Button onClick={event => history.push("/step3")}>Précédent</Button>
			</Grid>
		</section>
	)
}

export default FourthStep
