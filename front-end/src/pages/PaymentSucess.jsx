import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentSucess() {

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const name = queryParams.get("name");
    const amount = queryParams.get("amount");

    function handleDashboard() {
        navigate("/dashboard")
    }

    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-3xl font-bold text-center">Payment Successfull</h2>
                </div>
                <div className="p-6">
                <div className="flex items-center space-x-4">
                    
                    <h3 className="text-2xl font-semibold">To : {name}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <div>
                        <h3>{amount}</h3>
                    </div>
                    </div>
                    <button onClick={handleDashboard} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Dashboard
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>

}