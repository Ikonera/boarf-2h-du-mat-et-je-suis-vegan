import React, { FunctionComponent } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Grid,
	makeStyles,
} from "@material-ui/core"

const styles = makeStyles({
	root: {
		bottom: '0',
		width: '100%',
		height: "10vh",
		justifyContent: "space-evenly",
		alignItems: "flex-start",
		paddingLeft: "2vh",
		color: "#0E924D",
		backgroundColor: "#000000",
		fontWeight: "bold",
	},
})

const Header: FunctionComponent = () =>
{
	const classes = styles()

	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Typography>
					Boarf 2h du mat et je suis vegan
				</Typography>
			</Toolbar>
		</AppBar>
   )
}

export default Header
