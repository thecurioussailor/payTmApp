import { useEffect, useState } from "react"
import {AppBar} from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    // useEffect(() => {
    //     axios.get("http://localhost:3000/api/v1/account/balance")
    //         .then( response =>{
    //             setBalance(response.data.user);
    //         })
    // }, [])
    return(
        <div>
            <AppBar/>
            <div className="m-8">
                <Balance value={balance}/>
                <Users/>
            </div>
        </div>
    )
}