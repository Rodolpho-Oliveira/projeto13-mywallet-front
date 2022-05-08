import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "../SignUp"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}