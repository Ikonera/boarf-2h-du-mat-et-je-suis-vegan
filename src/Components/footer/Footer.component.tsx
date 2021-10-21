import React, { FunctionComponent } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Grid,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


const styles = makeStyles({
	root: {
		bottom: '0',
		width: '100%',
		height: "10vh",
		justifyContent: "space-evenly",
		alignItems: "flex-end",
		paddingRight: "2vh",
		backgroundColor: "#000000",
		position: "absolute",
	},
})

const Footer: FunctionComponent = () =>
{
	const classes = styles()

	return (
		<AppBar position="static" className={ classes.root }>
			<Typography>
				&copy; 2020 - 2021 Orf Company
			</Typography>
		</AppBar>
   )
}

export default Footer
