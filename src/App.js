import { Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import BuilderPage from './pages/BuilderPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListPage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/builder/:surveyId" element={<BuilderPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
