import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import List from './components/List'
import Detail from './components/Detail'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/:id' element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
