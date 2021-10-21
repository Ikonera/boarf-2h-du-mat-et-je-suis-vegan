import React, { FunctionComponent, useContext } from "react"
import { KebabContext, OrderContext } from "../../store/context"
import { Button, Grid, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { incrementOrder } from "../../store/reducer"
import { makeStyles } from "@material-ui/core/styles"

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


const Ordering: FunctionComponent = () => {

    const history = useHistory()
    const { state } = useContext(KebabContext)
    const { orderState, orderDispatch } = useContext(OrderContext)
    const classes = styles()

    const gotoCheckout = () => {
        localStorage.setItem(`kebab-${orderState.number}`, JSON.stringify(state))
        orderDispatch(incrementOrder())
        history.push('/')
    }

    return (
        <section className={ classes.root }>
            <Typography variant="h2">
                On récapitule
            </Typography>
            <Grid>
                <img src={state.container} alt="container" />
                <Typography>{state.container}</Typography>
            </Grid>
            <Grid>
                <img src={state.meat} alt="meat" />
                <Typography>{state.meat}</Typography>
            </Grid>
            <Grid>
                {state.trim.map((trim: string, idx: number) => (
                    <img key={idx} src={trim} alt="trim" />
                ))}
            </Grid>
            <Grid>
                {state.sauce.map((sauce: string, idx: number) => (
                    <img key={idx} src={sauce} alt="sauce" />
                ))}
                
            </Grid>
            <Grid>
                <Button onClick={event => gotoCheckout()}>Suivant</Button>
            </Grid>
        </section>
    )

}

export default Ordering
