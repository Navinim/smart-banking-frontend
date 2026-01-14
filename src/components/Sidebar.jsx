import { FiMenu } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import {FiUsers, FiCreditCard} from "react-icons/fi";


export default function Sidebar({ isOpen, toggle }) {
    return (
        <>

            <div className={`fixed md:static top-0 left-0 h-full w-64 bg-white text-black p-6 transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                <div className="flex items-center justify-between ">

                    <h1 className="text-xl font-bold mb-8">BankDash</h1>
                    <button className="mb-8 p-3 text-xl" onClick={toggle}>
                        <FiMenu />
                    </button>
                </div>             

                <nav className="space-y-2">
                    <a
                        href="/"
                        className="group flex items-center gap-3 py-2 px-3 rounded
               text-gray-300 hover:bg-gray-700 hover:text-white transition"
                    >
                        <AiOutlineDashboard className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span>Dashboard</span>
                    </a>

                    <a
                        href="accounts"
                        className="group flex items-center gap-3 py-2 px-3 rounded
               text-gray-300 hover:bg-gray-700 hover:text-white transition"
                    >
                        <FiUsers className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span>Accounts</span>
                    </a>

                    <a
                        href="payments"
                        className="group flex items-center gap-3 py-2 px-3 rounded
               text-gray-300 hover:bg-gray-700 hover:text-white transition"
                    >
                        <FiCreditCard className="w-5 h-5 text-gray-400 group-hover:text-white" />
                        <span>Payments</span>
                    </a>
                </nav>

            </div>
        </>
    );
}
