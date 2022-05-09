import axios from "axios"
import styled from "styled-components"
import { useState} from "react"
import { Link } from "react-router-dom"
import { MdAddCircleOutline } from "react-icons/md"
import { MdExitToApp } from "react-icons/md"
import { IoMdRemoveCircleOutline } from "react-icons/io"

export default function Menu(){
    const [statements, setStatements] = useState([])
    const [balance, setBalance] = useState(0)
    axios.get("https://mywallet-back-end-project.herokuapp.com/statement", {
        headers: {
            token: localStorage.getItem("token")
        }
    }).then((response) => {
        setStatements(response.data)
        setBalance(getTotal())
    })
    return(
        <div>
            <Title>
                <h1>Olá, {localStorage.getItem("name")}</h1>
                <Link to="/login" onClick={() => localStorage.removeItem("token")}><MdExitToApp color="#ffffff" size="35px"/></Link>
            </Title>
            <MainScreen>
                <Values>
                    {statements.map((data) =>
                    <div>
                        <p>{data.description}</p>
                        <p style={{color:data.idType === 1 ? "green" : "red"}}>{data.value}</p>
                    </div>
                    )}
                    
                </Values>
                <Balance>
                    <p>Saldo:</p>  
                    <p style={{color:balance >= 0 ? "green" : "red"}}>{balance}</p>
                </Balance>
            </MainScreen>
            <NewStatements>
            <Link to="/new-entry">
                <div>
                    <MdAddCircleOutline style={{margin: "10px"}} color="#ffffff" size="22px"/>
                    <p>Nova entrada</p>
                </div>
            </Link>
            <Link to="/new-exit">
                <div>
                    <IoMdRemoveCircleOutline style={{margin: "10px"}} color="#ffffff" size="22px"/>
                    <p>Nova Saída</p>
                </div>
            </Link>
            </NewStatements>
        </div>
    )

    function getTotal(){
        let total = 0
        statements.forEach((data) =>{
            if(data.idType === 1){
                total += parseInt(data.value)
            }
            else{
                total -= parseInt(data.value)
            }
            
        })
        return total
    }
}

const MainScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    width: 80vw;
    height: 65vh;
    background-color: #ffffff;
    border-radius: 5px;
`

const Values = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        margin: 15px auto 0 auto;
    }
`

const NewStatements = styled.div`
    display: flex;
    width: 80vw;
    height: 20vh;
    align-items: center;
    justify-content: space-between;
    margin: 15px auto;

    a{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }

    div{
        background-color: #A328D6;
        width: 95%;
        height: 100%;
        font-size: 17px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 5px;

        p{
            color: #ffffff;
            margin-bottom: 10px;
            margin-left: 10px;
            width: 30%;
        }
    }
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: 10px auto;


    h1{
        color: #ffffff;
        font-size: 26px;
        font-weight: 700;
    }
`

const Balance = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`