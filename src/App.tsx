
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import RoomDetail from "./pages/RoomDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
      </Routes>
    </Router>
  )
}

export default App

