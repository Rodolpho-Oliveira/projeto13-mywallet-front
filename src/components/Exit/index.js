import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Exit(){
    const navigate = useNavigate()
    const [exit, setExit] = useState({value: "", description: ""})
    return(
        <div>
            <form onSubmit={createexit}>
                <input onChange={(e) => setExit({...exit, value: e.target.value})} type="number"/>
                <input onChange={(e) => setExit({...exit, description: e.target.value})}type="text"/>
                <input type="submit"/>
            </form>
        </div>
    )
    function createexit(e) {
        e.preventDefault()
        const promise = axios.post("https://mywallet-back-end-project.herokuapp.com/new-exit", exit, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        promise.then(() => {
            navigate("/menu")
        })
        promise.catch(() => {
            alert("Preencha corretamente!")
        })
    }
}