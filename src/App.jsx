import './App.css'
import BookingForm from './components/form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Schedule from './components/schedule'


function App() {

  return (
    <Router>
      <Routes>

        <Route path="/schedule" element={<Schedule />} />
        <Route path="/" element={<BookingForm />} />






      </Routes>
    </Router>

  )
}

export default App
