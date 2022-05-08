import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "../SignUp"
import Login from "../Login"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp/>}/>`
                <Route path="/login" element={<Login/>}/>`
            </Routes>
        </BrowserRouter>
    )
}