import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Diary from './Diary';
import Create from './Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DiaryContent from './DiaryContent';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<Home />} path={'/'}></Route>
          <Route element={<Diary />} path={'/diary'}></Route>
          <Route element={<Create />} path={'/new-diary'}></Route>
          <Route element={<DiaryContent />} path={'/diary-content/:id'}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
