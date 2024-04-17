import './App.css'
import BookingForm from './components/form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Schedule from './components/schedule'
import Demo from './pages/demo'


function App() {

  return (
    <Router>
      <Routes>

        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/" element={<Demo/>} />






      </Routes>
    </Router>

  )
}

export default App
