import React, { FunctionComponent, useContext } from "react"
import { KebabContext, OrderContext } from "../../store/context"
import { Button, Grid, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { incrementOrder } from "../../store/reducer"

const Ordering: FunctionComponent = () => {

    const history = useHistory()
    const { state } = useContext(KebabContext)
    const { orderState, orderDispatch } = useContext(OrderContext)

    const gotoCheckout = () => {
        localStorage.setItem(`kebab-${orderState.number}`, JSON.stringify(state))
        orderDispatch(incrementOrder())
        history.push('/')
    }

    return (
        <section>
            <Typography>
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
