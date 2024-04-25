import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import {useEffect, useState } from "react";
import axios from 'axios'
export const AppBar = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

   
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get("https://paytmapp.onrender.com/api/v1/user/", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                setUsername(response.data.user.firstName);
            })
            .catch(error => {
                console.error("Error fetching user:", error);
            });
        }
    }, []);

    function handleLogout() {
                localStorage.clear();
                setUsername("");
                navigate('/dashboard', {replace: true});
    }
    return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4">
        PayTM App
    </div>
    
    <div className="flex">

        {!username ? (
            <div className="flex flex-col mr-2 justify-center h-full">
            <Button onClick={() =>{
                navigate("/signin")
            }} label={'Signin'}/>
        </div>


        ) : (
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    {`Hello ${username}`}
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {username[0]}
                    </div>
                </div>
                <div>
                <Button onClick={handleLogout} label={'Log out'}/>
                </div>
                
            </div>

        )}
        
        
    </div>
</div>
}