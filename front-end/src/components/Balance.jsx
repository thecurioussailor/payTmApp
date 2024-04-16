import axios from 'axios'
import { useEffect, useState } from 'react'
export const Balance = () => {

    const [balance, setBalance] = useState(0);
    useEffect(() => {
        axios.get("https://paytmapp.onrender.com/api/v1/account/balance", {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(response => {
            setBalance(response.data.balance);
        },[]);
    })
    return <div className="flex">
        
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}