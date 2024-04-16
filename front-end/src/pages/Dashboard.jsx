import { useEffect, useState } from "react"
import {AppBar} from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    
    return(
        <div>
            <AppBar/>
            <div className="m-8">
                <Balance/>
                <Users/>
            </div>
        </div>
    )
}