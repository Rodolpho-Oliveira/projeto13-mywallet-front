import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Entry(){
    const navigate = useNavigate()
    const [entry, setEntry] = useState({value: "", description: ""})
    return(
        <div>
            <form onSubmit={createEntry}>
                <input onChange={(e) => setEntry({...entry, value: e.target.value})} type="number"/>
                <input onChange={(e) => setEntry({...entry, description: e.target.value})}type="text"/>
                <input type="submit"/>
            </form>
        </div>
    )
    function createEntry(e) {
        e.preventDefault()
        const promise = axios.post("https://mywallet-back-end-project.herokuapp.com/new-entry", entry, {
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