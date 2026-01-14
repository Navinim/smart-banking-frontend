import React from 'react'
import { FiUser, FiMenu } from "react-icons/fi";

const Navbar = () => {
    return (

        <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
           
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
                <input  type="text"  placeholder="Search..." className="border p-2 rounded"
                />
                

            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <FiUser className="text-gray-700 text-lg" />
                </div>
        </div>

    )
}

export default Navbar
