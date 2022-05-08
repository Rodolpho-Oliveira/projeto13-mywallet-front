import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({email: "", password: ""})
    return(
        <div>
            <form onSubmit={acessAccount}>
                <input onChange={(e) => setUserLogin({...userLogin, email: e.target.value})} placeholder="email" type="email"/>
                <input onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} placeholder="senha" type="password"/>
                <input type="submit"/>
            </form>
        </div>
    )
    
    function acessAccount(e){
        e.preventDefault()
        const promise = axios.post("https://mywallet-back-end-project.herokuapp.com/sign-in", userLogin)
        promise.catch((e) => {
            alert("Preencha corretamente!")
            console.log(e)
        })
        promise.then(() => {
            navigate("/test")
        })
    }
}