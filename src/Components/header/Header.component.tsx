import React, { FunctionComponent } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Grid,
} from "@material-ui/core"


const Header: FunctionComponent = () =>
{
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography>
					Boarf 2h du mat et je suis vegan
				</Typography>
			</Toolbar>
		</AppBar>
   )
}

export default Header
