import React from 'react'
import BalanceChart from '../components/BalanceChart'

const Dashboard = () => {
    return (
        <>
            <div>
                <h1 className="text-xl font-bold mb-6">Finance & Banking Overview</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded card-shadow">
                        <h3 className="font-semibold">Total Balance</h3>
                        <p className="text-2xl mt-2 font-bold">$12,540</p>
                    </div>
                    <div className="bg-white p-6 rounded card-shadow">
                        <h3 className="font-semibold">Transactions</h3>
                        <p className="text-2xl mt-2 font-bold">240</p>
                    </div>
                    <div className="bg-white p-6 rounded card-shadow">
                        <h3 className="font-semibold">Income</h3>
                        <p className="text-2xl mt-2 font-bold">$5,490</p>
                    </div>
                    
                        <BalanceChart/>
                    
                </div>
            </div>
        </>
    )
}

export default Dashboard
