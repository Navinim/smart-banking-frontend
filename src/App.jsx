import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <div className="flex flex-col flex-1">
          <Navbar toggle={toggleSidebar} />
          <div className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
