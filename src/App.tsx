import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import AprilIssue from './pages/AprilIssue';
import MayIssue from './pages/MayIssue';
import Archive from './pages/Archive';

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue/1" element={<AprilIssue />} />
          <Route path="/issue/2" element={<MayIssue />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
