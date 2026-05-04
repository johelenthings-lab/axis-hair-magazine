import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import IssueTemplate from './pages/IssueTemplate';
import Archive from './pages/Archive';

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue/:id" element={<IssueTemplate />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
