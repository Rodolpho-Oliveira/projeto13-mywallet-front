import axios from "axios"
import { useState } from "react"

export default function SignUp(){
    const [userSignUp, setUserSignUp] = useState({name: "", email: "", password: "", repeatPassword: "" })
    console.log(userSignUp)
    return(
        <div>
            <form onSubmit={createAccount}>
                <input onChange={(e) => setUserSignUp({...userSignUp, name: e.target.value})} type="text" placeholder="Nome"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, email: e.target.value})} type="email" placeholder="Email"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, password: e.target.value})} type="password" placeholder="Senha"/>
                <input onChange={(e) => setUserSignUp({...userSignUp, repeatPassword: e.target.value})} type="password" placeholder="Repetir senha"/>
                <input type="submit"/>
            </form>
        </div>
    )

    function createAccount(e){
        e.preventDefault()
        axios
        .post("https://mywallet-back-end-project.herokuapp.com/sign-up", userSignUp)
        .then()
        .catch(console.log("foi não"))
    }
}