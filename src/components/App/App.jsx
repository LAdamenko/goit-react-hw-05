import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Navigation from '../Navigation/Navigation';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFound from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
