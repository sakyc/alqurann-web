import Detail_Surah from "./pages/Detail_Surah"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah/:surahId" element={<Detail_Surah />} />
      </Routes>
    </Router>
      
    
  )
}

export default App
