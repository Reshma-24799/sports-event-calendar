import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import CalendarPage from './pages/CalendarPage'
import AddEventPage from './pages/AddEventPage'

function App() {

  return (
    <div className='min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          {/* <Route path="/event/:id" element={<DetailPage />} /> */}
          <Route path="/add-event" element={<AddEventPage />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
