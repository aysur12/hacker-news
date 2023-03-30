import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import NotFound from './pages/NotFound';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/hacker-news" element={<MainLayout />}>
            <Route index element={<News />} />
            <Route path="new-story/:newsId" element={<NewsDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
