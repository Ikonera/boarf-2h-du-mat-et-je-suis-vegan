import { useHistory } from "react-router-dom"

export const previousStep = () => {
    const history = useHistory()
    if (!localStorage.getItem("container")) history.push('/')
    if (!localStorage.getItem("meat")) history.push('/step2')
    if (!localStorage.getItem("trim")) history.push('/step3')
    if (!localStorage.getItem("sauce")) history.push('/step4')
}