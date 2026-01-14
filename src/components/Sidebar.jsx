import { FiMenu } from "react-icons/fi";

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


                <nav className="space-y-4">
                    <a href="/" className="block py-2 px-3 rounded hover:bg-gray-700">
                        Dashboard
                    </a>
                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">
                        Accounts
                    </a>
                    <a href="#" className="block py-2 px-3 rounded hover:bg-gray-700">
                        Payments
                    </a>
                </nav>
            </div>
        </>
    );
}
