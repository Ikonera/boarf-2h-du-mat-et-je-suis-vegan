import { Button, Grid, Typography } from "@material-ui/core"
import React, { FunctionComponent, useContext, useEffect } from "react"
import { resetKebab } from "../../store/reducer"
import { KebabContext } from "../../store/context"
import { useHistory } from "react-router-dom"
import { IKebab } from "src/store/state"

const getKebabs = () => {
    let kebabs = []
    for (const key of Object.keys(localStorage)) {
        if (key.includes("kebab-")) kebabs.push(JSON.parse(localStorage.getItem(key) as string))
    }

    return kebabs
}

const displayTrims = (props: string | string[]) => (
    ' ' + props + ' '
)
const displaySauces = (props: string | string[]) => (
    ' ' + props + ' '
)

const Checkout: FunctionComponent = () => {

    const { dispatch } = useContext(KebabContext)
    const history = useHistory()
    const allKebabs = getKebabs()

    const sendOrder = () => {
        history.push("/waiting")
    }

    useEffect(() => {
        dispatch(resetKebab())
        console.log(allKebabs)
    }, [])

    return (
        <section>
            <Button onClick={event => sendOrder()}>Commander</Button>
            <Typography variant="h6">
                Voici le résumé de vos commandes :
            </Typography>
            {allKebabs.map((kebab: IKebab, idx: number) => (
                <Grid key={idx}>
                    <Typography>
                        Kebab {' '}
                        {kebab.container} + {' '}
                        {kebab.meat} +
                        {displayTrims(kebab.trim)} +
                        {displaySauces(kebab.sauce)}
                    </Typography>
                </Grid>
            ))}
        </section>
    )

}

export default Checkout
